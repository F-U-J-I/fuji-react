import React from 'react';
import cl from './_CourseMiniLineList.module.scss'
import CourseMiniList from "../many/CourseMiniList";

const CourseMiniLineList = ({courses, className, ...props}) => {
    return <CourseMiniList courses={courses} className={[className, cl.courses].join(" ")} {...props} />
};

export default CourseMiniLineList;