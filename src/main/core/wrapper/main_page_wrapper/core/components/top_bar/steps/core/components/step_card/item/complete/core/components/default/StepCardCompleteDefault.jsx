import React from 'react';
import StepCard from "../../../../core/components/card/StepCard";
import cl from "./_StepCardCompleteDefault.module.scss";

const StepCardCompleteDefault = ({className, ...props}) => {
    return (
        <StepCard className={[cl.card, className].join(" ")} {...props} />
    );
};

export default StepCardCompleteDefault;