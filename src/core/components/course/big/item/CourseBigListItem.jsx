import React from 'react';
import cl from './_CourseBigListItem.module.scss'
import NavigationCourseBigListItem from "./core/components/navigation/NavigationCourseBigListItem";
import CourseBig from "./core/components/course_big/CourseBig";


const CourseBigListItem = ({addedCollections, course, className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <NavigationCourseBigListItem path={course.path}
                                         addedCollections={addedCollections}
                                         quantityInCollection={course.collection.quantity_in_collection}
                                         courseAddedToCollection={course.collection.profile_added}
                                         className={cl.navigation} />
            <CourseBig course={course} to='#' className={cl.course} />
        </div>
    );
};

export default CourseBigListItem;