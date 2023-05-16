import React from 'react';
import cl from "./_TopBarLearnCourse.module.scss";
import UserNav from "../core/components/user/UserNav";
import ButtonCompleteCourse from "./core/components/complete_course/ButtonCompleteCourse";

const TopBarLearnCourse = ({existsCreateStep, className, ...props}) => {
    return (
        <div className={[cl.topBar, className].join(" ")} {...props}>
            <div className={cl.line} />
            <ButtonCompleteCourse className={cl.button} />
            <UserNav className={cl.userNav}/>
        </div>
    );
};

export default TopBarLearnCourse;