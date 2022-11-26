import React from 'react';
import StepCardBaseActive from "./core/components/active/StepCardBaseActive";
import StepCardBaseDefault from "./core/components/default/StepCardBaseDefault";

const StepCardBase = ({active, ...props}) => {
    if (active)
        return <StepCardBaseActive {...props} />
    return <StepCardBaseDefault {...props} />
};

export default StepCardBase;