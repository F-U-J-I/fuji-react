import React, {Component} from 'react';
import cl from './_StepCreateCourseWrapper.module.scss'
import {CreateCourseWrapperContext} from "../../../core/wrapper/core/context/CreateCourseWrapperContext";
import {workshopId} from "../../../../../archive/core/service/menuID";
import {
    TOP_MENU_CREATE_STEP_COURSE
} from "../../../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {getStepList} from "../../../../../core/api/courseAPI";
import {getError} from "../../../../../../core/service/error";
import {withParams} from "../../../../../../core/service/params";
import {StepCreateCourseWrapperContext} from "./core/context/StepCreateCourseWrapperContext";
import TitleEditable from "../components/text/title/editable/TitleEditable";
import BottomBarCreatingCourse from "../../../core/wrapper/core/core/components/bottom-bar/BottomBarCreatingCourse";

class StepCreateCourseWrapperLocal extends Component {
    static contextType = CreateCourseWrapperContext;

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
        this.context.setTopMenu(TOP_MENU_CREATE_STEP_COURSE)
        this.context.setMenuId(workshopId)
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.pathStep !== this.props.params.pathStep) {
            this._setData()
        }
    }

    _setData() {
        const {path, pathTheme, pathLesson, pathStep} = this.props.params;

        this.context.setTo(`/courses/${path}/create/${pathTheme}/${pathLesson}/${pathStep}/`)
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

    setTitle = (newTitle) => {
        this.setState({title: newTitle})
    }
    setContent = (state) => {
        this.setState({content: state})
    }
    setSaveContent = (state: Boolean) => {
        this.setState({saveContent: state})
    }

    setIsContentUpdated = (state: Boolean) => {
        this.setState({isContentUpdated: state})
    }

    render() {
        const {children, setClassName, ...props} = this.props;
        const {title, content, isLoadStepList, isContentUpdated, error} = this.state;
        const {setTo, setSteps} = this.context;

        if (error)
            return getError(error);

        let contentHTML = null;

        if (isLoadStepList)
            contentHTML = (
                // eslint-disable-next-line react/jsx-no-undef
                <StepCreateCourseWrapperContext.Provider value={{
                    setTo: setTo,
                    setSteps: setSteps,
                    setTitle: this.setTitle,
                    setContent: this.setContent,
                    isContentUpdated: isContentUpdated,
                    setIsContentUpdated: this.setIsContentUpdated,
                    ...props
                }}>
                    <div className={cl.titleWrapper}>
                        <TitleEditable title={title} setTitle={this.setTitle} className={cl.title} />
                        <div className={cl.line} />
                    </div>
                    {children}
                    <div className={[cl.bottomBar, isContentUpdated ? cl.active : ''].join(" ")}>
                        <BottomBarCreatingCourse title={title}
                                                 content={content}
                                                 className={cl.bottomBarThis} />
                    </div>
                </StepCreateCourseWrapperContext.Provider>
            )

        return (
            <>
                {contentHTML}
            </>
        );
    }
}

const StepCreateCourseWrapperContextConsumer = StepCreateCourseWrapperContext.Consumer;
const StepCreateCourseWrapper = withParams(StepCreateCourseWrapperLocal)

export {StepCreateCourseWrapper, StepCreateCourseWrapperContextConsumer};