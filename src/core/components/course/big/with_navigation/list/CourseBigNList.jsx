import React from 'react';
import cl from './_CourseBigNList.module.scss'
import CourseBigNListItem from "../item/CourseBigNListItem";
import EmptyList from "../../../../empty/EmptyList";

const CourseBigNList = ({addedCollections, titleEmpty, descriptionEmpty, courses,  className, ...props}) => {
    if (courses === undefined || courses == null || courses.length === 0) {
        return <EmptyList title={titleEmpty} description={descriptionEmpty} className={className} {...props} />
    }

    return (
        <div className={className} {...props}>
            {courses.map(item =>
                <CourseBigNListItem addedCollections={addedCollections} course={item} className={cl.course} key={item.path} />
            )}
        </div>
    );
};

export default CourseBigNList;