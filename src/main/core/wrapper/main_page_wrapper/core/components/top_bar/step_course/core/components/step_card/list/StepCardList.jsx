import React from 'react';
import StepCardComplete from "../item/complete/StepCardComplete";
import cl from "./_StepCardList.module.scss";
import StepCardDefault from "../item/base/StepCardDefault";
import {withParams} from "../../../../../../../../../../../../core/service/params";
import StepCardCreate from "../item/create/StepCardCreate";

const StepCardList = ({steps, className, type, params, ...props}) => {
    const getStep = (step) => {
        const to = `/courses/${params.path}/${type}/${params.pathTheme}/${params.pathLesson}/${step.path}/`
        if (step.is_complete)
            return <StepCardComplete key={step.path} to={to} active={step.is_active} className={cl.listItem} />
        return <StepCardDefault key={step.path} to={to} active={step.is_active} className={cl.listItem} />
    }

    return (
        <div className={[cl.list, className].join(" ")} {...props}>
            {steps.map(step => getStep(step))}
        </div>
    );
};

export default withParams(StepCardList);