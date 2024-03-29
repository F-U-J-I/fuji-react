import React, {Component} from 'react';
import cl from './_StepDetailPage.module.scss'
import {StepCreateCourseWrapperContext} from "./core/wrapper/core/context/StepCreateCourseWrapperContext";
import {getStep} from "../../../core/api/courseAPI";
import {withParams} from "../../../../core/service/params";
import {getError} from "../../../../core/service/error";
import {getImage} from "../../../../core/api/mainAPI";
import DraftEditor from "./core/components/draft_editor/DraftEditor";
import {parseContent} from "../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/parse";

class StepDetailPage extends Component {
    static contextType = StepCreateCourseWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            imageTheme: null,
            toBack: `./../`,
            // content: '',
            step: null,

            isLoad: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.pathStep !== this.props.params.pathStep){
            this._setData()
        }
    }

    _setData() {
        this._setStep()
    }
    _setStep() {
        const {path, pathTheme, pathLesson, pathStep} = this.props.params;
        getStep(path, pathTheme, pathLesson, pathStep).then(
            r => {
                const content = parseContent(r.content);
                this.setState({
                    step: r,
                    content: content,
                })
                this.context.setContent(content)
                this.context.setTitle(r.title)
            },
            e => {this.setState({error: e.status})},
        ).finally(() => {
            // console.log(this.state.content)
            this.setState({isLoad: true})
        })
    }

    render() {
        const {content, isLoad, error} = this.state;
        const {setContent, setIsContentUpdated} = this.context;

        if (error)
            getError(error)

        let contentHTML = null;
        if (isLoad) {
            contentHTML = (
                <DraftEditor value={content}
                             isContentUpdated={this.context.isContentUpdated}
                             setIsContentUpdated={setIsContentUpdated}
                             setContent={setContent}
                             className={cl.editor} />
                // <DraftEditor value={'<img src="some_image.png"/>'} className={cl.editor} />
            )
        }


        return (
            <div className={cl.wrapper}>
                {contentHTML}
            </div>
        );
    }
}

export default withParams(StepDetailPage);