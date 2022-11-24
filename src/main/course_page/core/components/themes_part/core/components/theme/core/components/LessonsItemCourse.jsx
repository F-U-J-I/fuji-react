import React from 'react';
import cl from './_LessonsItemCourse.module.scss'
import Text16M from "../../../../../../../../../../core/ui/text/16/medium/Text16M";

const LessonsItemCourse = ({title, className, ...props}) => {
    return (
        <div className={[cl.content, className].join(" ")} {...props}>
            <Text16M className={cl.title}>{title}</Text16M>
        </div>
    );
};

export default LessonsItemCourse;