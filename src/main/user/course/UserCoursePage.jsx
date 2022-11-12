import React, {Component} from 'react';
import {COURSE_ID} from "../core/wrapper/core/wallpaper/core/menu/core/service/UserMenuService";
import {UserWrapperContext} from "../core/wrapper/core/context/UserWrapperContext";
import {withParams} from "../../../core/service/params";
import Courses from "../../core/components/courses/Courses";

class UserCoursePage extends Component {
    static contextType = UserWrapperContext;

    componentDidMount() {
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.path !== this.props.params.path) {
            this._setData()
        }
    }

    _setData = () => {
        this.context.setActiveId(COURSE_ID)
        this.context.setPath(this.props.params.path)
    }

    render() {
        const {params, ...props} = this.props;

        return <Courses path={params.path} {...props} />
    }
}

export default withParams(UserCoursePage);