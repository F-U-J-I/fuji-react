import React from 'react';
import cl from './_StepCardDefault.module.scss'
import LinkStepCard from "../core/components/card/link/LinkStepCard";

const StepCardDefault = ({className, ...props}) => {
    return <LinkStepCard className={[cl.card, className].join(" ")} {...props} />
};

export default StepCardDefault;