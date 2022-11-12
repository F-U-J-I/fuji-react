import React, {Component} from 'react';
import {getStudiedCourses} from "../../core/api/userAPI";
import {withParams} from "../../../core/service/params";
import SystemDetailCollection from "../../../core/components/collection/big/system/detail/SystemDetailCollection";
import {UserWrapperContext} from "../../user/core/wrapper/core/context/UserWrapperContext";


class LearnProcessCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            isLoad: false,
        }
    }

    static contextType = UserWrapperContext;

    componentDidMount() {
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.path !== this.props.params.path)
            this._setData()
    }

    _setData = () => {
        this.context.setActiveId(null)
        this.context.setPath(this.props.params.path)
        this._setCoursesLearning(this.props.params.path)
    }

    _setCoursesLearning = (path) => {
        getStudiedCourses(path).then(r => {
            this.setState({
                courses: r.results,
                isLoad: true
            })
        })
    }

    render() {
        const {courses, isLoad} = this.state;
        if (isLoad) {
            return <SystemDetailCollection courses={courses} to="#" title="Завершил изучение" />
        }
    }
}

export default withParams(LearnProcessCollection);