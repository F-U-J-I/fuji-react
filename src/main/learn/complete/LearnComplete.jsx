import React, {Component} from 'react';
import clCommon from "../core/scss/_Learn.module.scss"
import {getStudiedCourses} from "../../core/api/userAPI";
import SystemDetailCollection from "../../../core/components/collection/big/system/detail/SystemDetailCollection";

class LearnComplete extends Component {
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

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.path !== this.props.path)
    //         this._setData()
    // }

    _setData = () => {
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