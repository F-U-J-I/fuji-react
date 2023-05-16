import React from 'react';
import cl from "./_TopBarLearnStepCourse.module.scss";
import StepCardList from "../core/components/step_card/list/StepCardList";
import ButtonPublishCourse from "../../create_course/core/components/publish_course/ButtonPublishCourse";
import UserNav from "../../core/components/user/UserNav";
import ButtonCompleteCourse from "../../learn_course/core/components/complete_course/ButtonCompleteCourse";

const TopBarLearnStepCourse = ({existsCreateStep, steps, className, ...props}) => {
    return (
        <div className={[cl.topBar, className].join(" ")} {...props}>
            <div className={cl.line} />
            <StepCardList existsCreateStep={existsCreateStep} steps={steps} className={cl.steps} type="learn" />
            <ButtonCompleteCourse className={cl.button} />
            <UserNav className={cl.userNav}/>
        </div>
    );
};

export default TopBarLearnStepCourse;