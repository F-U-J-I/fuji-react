import React from 'react';
import cl from './_FitsItemCourse.module.scss'
import Text24Bk from "../../../../../../../core/ui/text/24/book/Text24Bk";
import H4 from "../../../../../../../core/ui/title/H4/H4";

const FitsItemCourse = ({title, description, className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <H4 className={cl.title}>{title}</H4>
            <Text24Bk className={cl.description}>{description}</Text24Bk>
        </div>
    );
};

export default FitsItemCourse;