import React, {Component} from 'react';
import cl from './_StepLearnCourseWrapper.module.scss'
import {
    TOP_MENU_LEARN_STEP_COURSE
} from "../../../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {getStepList} from "../../../../../core/api/courseAPI";
import {getError} from "../../../../../../core/service/error";
import {withParams} from "../../../../../../core/service/params";
import {StepLearnCourseWrapperContext} from "./core/context/StepLearnCourseWrapperContext";
import BottomBarCreatingCourse from "../../../core/wrapper/core/core/components/bottom-bar/BottomBarCreatingCourse";
import {LearnCourseWrapperContext} from "../../../core/wrapper/core/context/LearnCourseWrapperContext";
import H1 from "../../../../../../core/ui/title/H1/H1";
import H2 from "../../../../../../core/ui/title/H2/H2";

class StepCreateCourseWrapperLocal extends Component {
    static contextType = LearnCourseWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            isContentUpdated: false,

            isLoadStepList: false,
            error: null,
        }
    }

    componentDidMount() {
        this.context.setTopMenu(TOP_MENU_LEARN_STEP_COURSE)
        // this.context.setMenuId(workshopId)
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.pathStep !== this.props.params.pathStep) {
            this._setData()
        }
    }

    _setData() {
        // const {path, pathTheme, pathLesson, pathStep} = this.props.params;

        // this.context.setTo(`/courses/${path}/create/${pathTheme}/${pathLesson}/${pathStep}/`)
        this._setStepList()
    }

    _setStepList() {
        const {path, pathTheme, pathLesson, pathStep} = this.props.params;
        getStepList(path, pathTheme, pathLesson, pathStep).then(
            r => {this.context.setSteps(r)},
            e => {this.setState({error: e.status})},
        ).finally(() => {
            this.setState({isLoadStepList: true})
        })
    }

    setIsContentUpdated = (state: Boolean) => {
        this.setState({isContentUpdated: state})
    }

    setTitle = (newTitle) => {
        this.setState({title: newTitle})
    }

    render() {
        const {children, setClassName, ...props} = this.props;
        const {title, content, isLoadStepList, isContentUpdated, error} = this.state;
        // const {setTo} = this.context;

        if (error)
            return getError(error);

        let contentHTML = null;

        if (isLoadStepList)
            contentHTML = (
                <StepLearnCourseWrapperContext.Provider value={{
                    // setTo: setTo,
                    isContentUpdated: isContentUpdated,
                    setIsContentUpdated: this.setIsContentUpdated,
                    setTitle: this.setTitle,
                    ...props
                }}>
                    <div className={cl.titleWrapper}>
                        <H2 className={cl.title}>{title}</H2>
                        <div className={cl.line} />
                    </div>
                    {children}
                    <div className={[cl.bottomBar, isContentUpdated ? cl.active : ''].join(" ")}>
                        <BottomBarCreatingCourse title={title}
                                                 content={content}
                                                 className={cl.bottomBarThis} />
                    </div>
                </StepLearnCourseWrapperContext.Provider>
            )

        return (
            <>
                {contentHTML}
            </>
        );
    }
}

const StepLearnCourseWrapperContextConsumer = StepLearnCourseWrapperContext.Consumer;
const StepLearnCourseWrapper = withParams(StepCreateCourseWrapperLocal)

export {StepLearnCourseWrapper, StepLearnCourseWrapperContextConsumer};