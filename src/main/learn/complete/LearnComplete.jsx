import React, {Component} from 'react';
import clCommon from "../core/scss/_Learn.module.scss"
import {getStudiedCourses} from "../../core/api/userAPI";
import SystemDetailCollection from "../../../core/components/collection/big/system/detail/SystemDetailCollection";
import {
    TOP_MENU_DEFAULT
} from "../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {MainPageWrapperContext} from "../../core/context/Context";
import {learnId} from "../../core/wrapper/main_page_wrapper/core/service/activeIdService";

class LearnComplete extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            path: sessionStorage.getItem('path'),
            isLoad: false,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData = () => {
        this.context.setMin(false)
        this.context.setTopMenu(TOP_MENU_DEFAULT)
        this.context.setActiveId(learnId)
        this._setCoursesLearning()
        this.setState({isLoad: true})
    }

    _setCoursesLearning = () => {
        getStudiedCourses(this.state.path).then(r => {
            this.setState({courses: r.results})
        })
    }

    render() {
        const {courses, isLoad} = this.state;
        let coursesHTML = null;
        if (isLoad)
            coursesHTML = <SystemDetailCollection courses={courses} to="#" title="Завершил изучение"/>

        return (
            <div className={clCommon.wrapper}>
                {coursesHTML}
            </div>
        );
    }
}

export default LearnComplete;