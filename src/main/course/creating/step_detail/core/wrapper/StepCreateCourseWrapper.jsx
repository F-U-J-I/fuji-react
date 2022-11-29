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

class StepCreateCourseWrapperLocal extends Component {
    static contextType = CreateCourseWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            title: '',

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

    render() {
        const {children, ...props} = this.props;
        const {title, isLoadStepList, error} = this.state;
        const {setTo, setSteps} = this.context;

        if (error)
            return getError(error);

        let content = null;

        if (isLoadStepList)
            content = (
                // eslint-disable-next-line react/jsx-no-undef
                <StepCreateCourseWrapperContext.Provider value={{
                    setTo: setTo,
                    setSteps: setSteps,
                    setTitle: this.setTitle,
                    ...props
                }}>
                    <div className={cl.titleWrapper}>
                        <TitleEditable title={title} setTitle={this.setTitle} className={cl.title} />
                        <div className={cl.line} />
                    </div>
                    {children}
                </StepCreateCourseWrapperContext.Provider>
            )

        return (
            <>
                {content}
            </>
        );
    }
}

const StepCreateCourseWrapperContextConsumer = StepCreateCourseWrapperContext.Consumer;
const StepCreateCourseWrapper = withParams(StepCreateCourseWrapperLocal)

export {StepCreateCourseWrapper, StepCreateCourseWrapperContextConsumer};