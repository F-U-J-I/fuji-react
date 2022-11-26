import React, {Component} from 'react';
// import cl from './_StepDetailPage.module.scss'
import {StepCreateCourseWrapperContext} from "./core/wrapper/core/context/StepCreateCourseWrapperContext";
import {workshopId} from "../../../archive/core/service/menuID";
import {getStep} from "../../../core/api/courseAPI";
import {withParams} from "../../../../core/service/params";

class StepDetailPage extends Component {
    static contextType = StepCreateCourseWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            imageTheme: null,
            to: `/courses/${this.props.params.path}/create/${this.props.params.pathTheme}/${this.props.params.pathLesson}/${this.props.params.pathCourse}/`,
            toBack: `./../`,
            title: '',
            content: '',

            isLoad: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setMenuId(workshopId)
        this.context.setTo(this.state.to)
        this._setStep()
    }
    _setStep() {
        const {path, pathTheme, pathLesson, pathStep} = this.props.params;
        getStep(path, pathTheme, pathLesson, pathStep).then(
            r => {this.setState({
                title: r.title,
                content: r.content,
            })},
            e => {this.setState({error: e.status})},
        ).finally(() => {
            this.setState({isLoadStepList: true})
        })
    }

    render() {
        // const {title, content} = this.state;
        return (
            <div>

            </div>
        );
    }
}

export default withParams(StepDetailPage);