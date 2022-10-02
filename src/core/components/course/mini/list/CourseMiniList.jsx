import React from 'react';
import cl from './_CourseMiniList.module.scss'
import CourseMini from "../item/CourseMini";

const CourseMiniList = ({courses, className, ...props}) => {
    return (
        <div className={[cl.courses, className].join(" ")} {...props}>
            {courses.map(item =>
                <CourseMini key={item.path} course={item}/>
            )}
        </div>
    );
};

export default CourseMiniList;