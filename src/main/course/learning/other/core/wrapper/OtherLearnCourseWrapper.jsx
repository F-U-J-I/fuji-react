import React, {Component} from 'react';
import {
    TOP_MENU_CREATE_COURSE, TOP_MENU_LEARN_COURSE
} from "../../../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {OtherLearnCourseWrapperContext} from "./core/context/OtherLearnCourseWrapperContext";
import {LearnCourseWrapperContext} from "../../../core/wrapper/core/context/LearnCourseWrapperContext";

class OtherLearnCourseWrapper extends Component {
    static contextType = LearnCourseWrapperContext;

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setTopMenu(TOP_MENU_LEARN_COURSE)
    }

    render() {
        const {children, ...props} = this.props;
        const {...context} = this.context;

        const content = (
            <OtherLearnCourseWrapperContext.Provider value={{
                ...context,
                ...props
            }}>
                {children}
            </OtherLearnCourseWrapperContext.Provider>
        )

        return (
            <>
                {content}
            </>
        );
    }
}

const OtherLearnCourseWrapperContextConsumer = OtherLearnCourseWrapperContext.Consumer;
export {OtherLearnCourseWrapper, OtherLearnCourseWrapperContextConsumer};