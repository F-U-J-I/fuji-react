import React from 'react';
import cl from './_CourseBigList.module.scss'
import CourseBigListItem from "../item/CourseBigListItem";
import EmptyList from "../../../empty/EmptyList";

const CourseBigList = ({addedCollections, titleEmpty, descriptionEmpty, courses, className, ...props}) => {
    if (courses === undefined || courses == null || courses.length === 0) {
        return <EmptyList title={titleEmpty} description={descriptionEmpty} className={className} {...props} />
    }

    return (
        <div className={className} {...props}>
            {courses.map(item =>
                <CourseBigListItem addedCollections={addedCollections} course={item} className={cl.course} key={item.path} />
            )}
        </div>
    );
};

export default CourseBigList;