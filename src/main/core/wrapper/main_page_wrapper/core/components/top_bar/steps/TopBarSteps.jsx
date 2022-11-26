import React from 'react';
import cl from "./_TopBarSteps.module.scss";
import StepCardList from "./core/components/step_card/list/StepCardList";
import ButtonPublishCourse from "../create_course/core/components/publish_course/ButtonPublishCourse";
import UserNav from "../core/components/UserNav";

const TopBarSteps = ({steps, className, ...props}) => {
    return (
        <div className={className} {...props}>
            <div className={cl.line} />
            <StepCardList steps={steps} className={cl.steps} />
            <ButtonPublishCourse className={cl.button} />
            <UserNav className={cl.userNav}/>
        </div>
    );
};

export default TopBarSteps;