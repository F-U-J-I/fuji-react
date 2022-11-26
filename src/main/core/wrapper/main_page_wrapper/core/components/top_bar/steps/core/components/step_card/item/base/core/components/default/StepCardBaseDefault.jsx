import React from 'react';
import cl from './_StepCardBaseDefault.module.scss';
import StepCard from "../../../../core/components/card/StepCard";

const StepCardBaseDefault = (className, ...props) => {
    return (
        <StepCard className={[cl.card, className].join(" ")} {...props}/>
    );
};

export default StepCardBaseDefault;