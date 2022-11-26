import React from 'react';
import cl from "./_StepCardBaseActive.module.scss";
import StepCard from "../../../../core/components/card/StepCard";

const StepCardBaseActive = ({className, ...props}) => {
    return (
        <StepCard className={[cl.card, className].join(" ")} {...props}/>
    );
};

export default StepCardBaseActive;