import React, {Component} from 'react';
import cl from "../core/scss/_Archive.module.scss";

import {ArchiveWrapperContext} from "../core/wrapper/core/context/ArchiveWrapperContext";
import {courseId} from "../core/service/menuID";
import H2 from "../../../core/ui/title/H2/H2";
import Courses from "../../core/components/courses/Courses";

class ArchiveCourse extends Component {
    static contextType = ArchiveWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    componentDidMount() {
        this.context.setActiveId(courseId)
    }

    render() {
        const {...props} = this.props;
        const path = sessionStorage.getItem('path')

        return (
            <div>
                <H2 className={cl.title}>Курсы</H2>
                <Courses path={path} className={cl.content} {...props} />
            </div>
        );
    }
}

export default ArchiveCourse;