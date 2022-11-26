import React from 'react';
import StepCardCompleteActive from "./core/components/active/StepCardCompleteActive";
import StepCardCompleteDefault from "./core/components/default/StepCardCompleteDefault";

const StepCardComplete = ({active, ...props}) => {
    if (active)
        return <StepCardCompleteActive {...props} />
    return <StepCardCompleteDefault {...props} />
};


export default StepCardComplete;