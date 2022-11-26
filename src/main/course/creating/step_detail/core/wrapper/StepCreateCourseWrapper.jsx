import React, {Component} from 'react';
import {CreateCourseWrapperContext} from "../../../core/wrapper/core/context/CreateCourseWrapperContext";
import {workshopId} from "../../../../../archive/core/service/menuID";
import {
    TOP_MENU_CREATE_STEP_COURSE
} from "../../../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {getStepList} from "../../../../../core/api/courseAPI";
import {getError} from "../../../../../../core/service/error";
import {withParams} from "../../../../../../core/service/params";
import {StepCreateCourseWrapperContext} from "./core/context/StepCreateCourseWrapperContext";

class StepCreateCourseWrapperLocal extends Component {
    static contextType = CreateCourseWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoadStepList: false,
            error: null,
        }
    }

    componentDidMount() {
        console.log(this.props.params)
        this._setData()
    }

    _setData() {
        this.context.setTopMenu(TOP_MENU_CREATE_STEP_COURSE)
        this.context.setMenuId(workshopId)
        this.setStepList()
    }

    setStepList() {
        const {path, pathTheme, pathLesson, pathStep} = this.props.params;
        getStepList(path, pathTheme, pathLesson, pathStep).then(
            r => {this.context.setSteps(r)},
            e => {this.setState({error: e.status})},
        ).finally(() => {
            this.setState({isLoadStepList: true})
        })
    }

    render() {
        const {children, ...props} = this.props;
        const {isLoadStepList, error} = this.state;
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
                    ...props
                }}>
                    {children}
                </StepCreateCourseWrapperContext.Provider>
            )

        return content;
    }
}

const StepCreateCourseWrapperContextConsumer = StepCreateCourseWrapperContext.Consumer;
const StepCreateCourseWrapper = withParams(StepCreateCourseWrapperLocal)

export {StepCreateCourseWrapper, StepCreateCourseWrapperContextConsumer};