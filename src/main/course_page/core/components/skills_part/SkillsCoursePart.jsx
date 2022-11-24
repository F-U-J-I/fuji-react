import React from 'react';
import cl from './_SkillsCoursePart.module.scss'
import TitlePurpleCoursePg from "../core/components/title/purple/TitlePurpleCoursePg";
import SkillsItemCourse from "./core/components/SkillsItemCourse";

const SkillsCoursePart = ({skills, ...props}) => {
    const listHTML = []
    for (let i in skills)
        listHTML.push(
            <SkillsItemCourse key={i} number={parseInt(i) + 1} description={skills[i]}/>
        )

    return (
        <div {...props}>
            <TitlePurpleCoursePg title='Чему научитесь'/>
            <div className={cl.content}>
                {listHTML}
            </div>
        </div>
    );
};

export default SkillsCoursePart;