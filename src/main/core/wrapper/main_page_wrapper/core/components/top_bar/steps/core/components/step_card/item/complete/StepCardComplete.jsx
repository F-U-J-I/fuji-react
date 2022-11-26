import React from 'react';
import cl from './_StepCardComplete.module.scss';
import StepCard from "../core/components/card/StepCard";

const StepCardComplete = ({className, ...props}) => {
    return (
        <StepCard className={[cl.card, className].join(" ")} {...props} />
    )
};


export default StepCardComplete;