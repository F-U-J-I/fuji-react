import React from 'react';
import cl from './_SkillsItemCourse.module.scss'
import Text24Bk from "../../../../../../../core/ui/text/24/book/Text24Bk";
import H3 from "../../../../../../../core/ui/title/H3/H3";

const SkillsItemCourse = ({number, description, className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <div className={cl.number}>
                <H3>{number}</H3>
            </div>
            <Text24Bk className={cl.description}>{description}</Text24Bk>
        </div>
    );
};

export default SkillsItemCourse;