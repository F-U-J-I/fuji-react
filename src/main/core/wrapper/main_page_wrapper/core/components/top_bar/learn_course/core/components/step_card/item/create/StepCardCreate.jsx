import React from 'react';
import createSVG from '../../../../../../../../../../../../../core/static/img/add-fill-white.svg'
import cl from "../base/_StepCardDefault.module.scss";
import DivStepCard from "../core/components/card/div/DivStepCard";

const StepCardCreate = ({className, ...props}) => {
    return <DivStepCard image={createSVG} className={[cl.card, className].join(" ")} {...props} />
};

export default StepCardCreate;