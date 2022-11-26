import React, {Component} from 'react';
import {CreateCourseWrapperContext} from "../../../core/wrapper/core/context/CreateCourseWrapperContext";
import {
    TOP_MENU_CREATE_COURSE
} from "../../../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {workshopId} from "../../../../../archive/core/service/menuID";
import {OtherCreateCourseWrapperContext} from "./core/context/OtherCreateCourseWrapperContext";

class OtherCreateCourseWrapper extends Component {
    static contextType = CreateCourseWrapperContext;

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setTopMenu(TOP_MENU_CREATE_COURSE)
        this.context.setMenuId(workshopId)
    }

    render() {
        const {children, ...props} = this.props;
        const {...context} = this.context;

        const content = (
            <OtherCreateCourseWrapperContext.Provider value={{
                ...context,
                ...props
            }}>
                {children}
            </OtherCreateCourseWrapperContext.Provider>
        )

        return (
            <>
                {content}
            </>
        );
    }
}

const OtherCreateCourseWrapperContextConsumer = OtherCreateCourseWrapperContext.Consumer;
export {OtherCreateCourseWrapper, OtherCreateCourseWrapperContextConsumer};