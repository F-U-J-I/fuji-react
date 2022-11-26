import React from 'react';
import StepCard from "../../../../core/components/card/StepCard";
import cl from "./_StepCardCompleteActive.module.scss";

const StepCardCompleteActive = ({className, ...props}) => {
    return (
        <StepCard className={[cl.card, className].join(" ")} {...props} />
    );
};

export default StepCardCompleteActive;