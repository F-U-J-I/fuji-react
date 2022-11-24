import React from 'react';
import cl from './_PurposeCoursePart.module.scss'
import TitlePurpleCoursePg from "../core/components/title/purple/TitlePurpleCoursePg";
import Text24Bk from "../../../../../core/ui/text/24/book/Text24Bk";

const PurposeCoursePart = ({description, className, ...props}) => {
    return (
        <div className={className} {...props}>
            <TitlePurpleCoursePg title='Цель курса'/>
            <Text24Bk className={cl.description}>{description}</Text24Bk>
        </div>
    );
};

export default PurposeCoursePart;