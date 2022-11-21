import React from 'react';
import cl from '../_CourseMiniList.module.scss'
import CourseMini from "../../item/CourseMini";
import EmptyList from "../../../../empty/EmptyList";

const CourseMiniList = ({titleError, descriptionError, courses, className, ...props}) => {
    if (courses === undefined || courses == null || courses.length === 0) {
        return <EmptyList title={titleError} description={descriptionError} className={className} {...props} />
    }
    return (
        <div className={[cl.courses, className].join(" ")} {...props}>
            {courses.map(item =>
                <CourseMini key={item.path} course={item}/>
            )}
        </div>
    );
};

export default CourseMiniList;