import React from 'react';
import cl from './_CourseBigList.module.scss'
import EmptyList from "../../../../empty/EmptyList";
import CourseBig from "../../core/components/course_big/CourseBig";

const CourseBigList = ({titleEmpty, descriptionEmpty, courses,  ...props}) => {
    if (courses === undefined || courses == null || courses.length === 0) {
        return <EmptyList title={titleEmpty} description={descriptionEmpty} {...props} />
    }

    return (
        <div {...props}>
            {courses.map(item =>
                <CourseBig course={item} to={`/courses/${item.path}/create/`} className={cl.course} key={item.path} />
            )}
        </div>
    );
};

export default CourseBigList;