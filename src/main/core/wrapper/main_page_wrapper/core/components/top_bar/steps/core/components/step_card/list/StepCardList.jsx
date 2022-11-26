import React from 'react';
import StepCardComplete from "../item/complete/StepCardComplete";
import cl from "./_StepCardList.module.scss";
import StepCardBase from "../item/base/StepCardBase";

const StepCardList = ({steps, className, ...props}) => {
    const getStep = (step) => {
        const to = `../${step.path}/`
        if (step.is_complete)
            return <StepCardComplete to={to} active={step.is_active} className={cl.listItem} />
        return <StepCardBase to={to} active={step.is_active} className={cl.listItem} />
    }

    return (
        <div className={[cl.list, className].join(" ")} {...props}>
            {steps.map(step => getStep(step))}
        </div>
    );
};

export default StepCardList;