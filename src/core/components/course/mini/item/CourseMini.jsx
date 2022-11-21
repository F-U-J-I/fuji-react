import React from 'react';
import cl from './_CourseMini.module.scss'
import CourseMiniPreview from "../core/components/preview/CourseMiniPreview";
import CourseMiniActive from "../core/components/active/CourseMiniActive";
import {COURSE_URL} from "../../../../service/urls";
import {Link} from "react-router-dom";


const CourseMini = ({course, className, ...props}) => {
    const to = `${COURSE_URL}/${course.path}/page`
    return (
        <div className={[cl.course, className].join(" ")}>
            <div className={cl.previewWrapper}>
                <CourseMiniPreview className={cl.preview} course={course} to={to} {...props}/>
            </div>
            <Link className={cl.activeWrapper} to={to}>
                <div className={cl.blur}/>
                <CourseMiniActive className={cl.active} course={course} {...props}/>
            </Link>
        </div>
    );
};

export default CourseMini;