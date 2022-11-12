import React from 'react';
import clCommon from "../core/scss/_SystemCollection.module.scss";
import CourseMiniList from "../../../../course/mini/list/many/CourseMiniList";
import TitleTextCollection from "../../core/components/title/TitleTextCollection";

const SystemDetailCollection = ({title, to, courses, className, ...props}) => {
    return (
        <div className={[clCommon.block, className].join(" ")} {...props}>
            <TitleTextCollection to={to} title={title} isTitleText={true} className={clCommon.title}/>
            <CourseMiniList courses={courses} className={clCommon.courses} />
        </div>
    );
};

export default SystemDetailCollection;