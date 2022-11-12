import React from 'react';
import clCommon from '../core/scss/_SystemCollection.module.scss'
import SystemHeadCollection from "../core/components/head/SystemHeadCollection";
import CourseMiniLineList from "../../../../course/mini/list/line/CourseMiniLineList";

const SystemBaseCollection = ({title, to, courses, className, ...props}) => {
    return (
        <div className={[clCommon.block, className].join(" ")} {...props}>
            <SystemHeadCollection title={title} to={to} />
            <CourseMiniLineList courses={courses} className={clCommon.courses} />
        </div>
    );
};

export default SystemBaseCollection;