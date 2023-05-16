import React, {Component} from 'react';
import cl from './_StepLearnPage.module.scss'
import clStyle from '../step_detail/core/components/draft_editor/_DraftEditor.module.scss'
import {StepLearnCourseWrapperContext} from "./core/wrapper/core/context/StepLearnCourseWrapperContext";
import {completeStep, getStep} from "../../../core/api/courseAPI";
import {withParams} from "../../../../core/service/params";
import {getError} from "../../../../core/service/error";
import {parseContent} from "../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/parse";
import DraftEditor from "./core/components/draft_editor/DraftEditor";

class StepLearnPage extends Component {
    static contextType = StepLearnCourseWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            imageTheme: null,
            toBack: `./../`,
            content: '',
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
                // this.context.setContent(content)
                this.context.setTitle(r.title)
            },
            e => {this.setState({error: e.status})},
        ).finally(() => {
            // console.log(this.state.content)
            this.setState({isLoad: true})
            this._completeStep()
        })
    }
    _completeStep() {
        const {path, pathTheme, pathLesson, pathStep} = this.props.params;
        completeStep(path, pathTheme, pathLesson, pathStep).then()
    }



    render() {
        const {content, isLoad, error} = this.state;
        const {setContent, setIsContentUpdated} = this.context;

        if (error)
            getError(error)

        let contentHTML = null;
        if (isLoad) {
            contentHTML = (
                <div className={[cl.editor, clStyle.editor].join(" ")}  dangerouslySetInnerHTML={{__html: content}} />
            )
        }


        return (
            <div className={cl.wrapper}>
                {contentHTML}
            </div>
        );
    }
}

export default withParams(StepLearnPage);