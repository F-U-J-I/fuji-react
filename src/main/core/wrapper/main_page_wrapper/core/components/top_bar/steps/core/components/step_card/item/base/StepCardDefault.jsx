import React from 'react';
import cl from './_StepCardDefault.module.scss'
import StepCard from "../core/components/card/StepCard";

const StepCardDefault = ({className, ...props}) => {
    return <StepCard className={[cl.card, className].join(" ")} {...props} />
};

export default StepCardDefault;