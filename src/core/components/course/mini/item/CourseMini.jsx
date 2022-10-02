import React from 'react';
import cl from './_CourseMini.module.scss'
import CourseMiniPreview from "../core/components/preview/CourseMiniPreview";
import CourseMiniActive from "../core/components/active/CourseMiniActive";


const CourseMini = ({course, className, ...props}) => {
    return (
        <div className={cl.course}>
            <CourseMiniPreview className={cl.preview} course={course} {...props}/>
            <div className={cl.activeWrapper}>
                <div className={cl.blur}/>
                <CourseMiniActive className={cl.active} course={course} {...props}/>
            </div>
        </div>
    );
};

export default CourseMini;