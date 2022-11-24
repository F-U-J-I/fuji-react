import React from 'react';
import cl from './_ThemesCoursePart.module.scss'
import Title64CoursePg from "../core/components/title/64/Title64CoursePg";
import ThemesItemCourse from "./core/components/theme/ThemesItemCourse";

const ThemesCoursePart = ({themes, ...props}) => {
    return (
        <div {...props}>
            <Title64CoursePg title='Программа курса' />
            <div className={cl.content}>
                {themes.map(item =>
                    <ThemesItemCourse key={item.title} title={item.title} lessons={item.lessons} className={cl.theme}/>
                )}
            </div>
        </div>
    );
};

export default ThemesCoursePart;