import React, {Component} from 'react';
import {CreateCourseWrapperContext} from "../../../core/wrapper/core/context/CreateCourseWrapperContext";
import {
    TOP_MENU_CREATE_COURSE
} from "../../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";

class OtherCreateCourseWrapper extends Component {
    static contextType = CreateCourseWrapperContext;

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setTopMenu(TOP_MENU_CREATE_COURSE)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default OtherCreateCourseWrapper;