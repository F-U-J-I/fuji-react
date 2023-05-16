import React from 'react';
import cl from './_StepCardComplete.module.scss';
import LinkStepCard from "../core/components/card/link/LinkStepCard";

const StepCardComplete = ({className, ...props}) => {
    return (
        <LinkStepCard className={[cl.card, className].join(" ")} {...props} />
    )
};


export default StepCardComplete;