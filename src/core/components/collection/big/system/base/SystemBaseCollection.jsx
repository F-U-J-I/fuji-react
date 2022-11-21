import React from 'react';
import clCommon from '../core/scss/_SystemCollection.module.scss'
import CourseMiniLineList from "../../../../course/mini/list/line/CourseMiniLineList";
import SystemWrapper from "../core/wrapper/SystemWrapper";

const SystemBaseCollection = ({title, to, courses, className, ...props}) => {
    return (
        <SystemWrapper className={className} title={title} to={to} {...props}>
            <CourseMiniLineList courses={courses} className={clCommon.courses} />
        </SystemWrapper>
    );
};

export default SystemBaseCollection;