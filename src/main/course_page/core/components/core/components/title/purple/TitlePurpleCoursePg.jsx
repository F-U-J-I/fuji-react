import React from 'react';
import cl from './_TitlePurpleCoursePg.module.scss'
import H2 from "../../../../../../../../core/ui/title/H2/H2";

const TitlePurpleCoursePg = ({title, className, ...props}) => {
    return (
        <div className={cl.wrapper}>
            <H2 className={[cl.title, className].join(" ")} {...props}>
                {title}
            </H2>
        </div>
    );
};

export default TitlePurpleCoursePg;