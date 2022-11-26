import React from 'react';
import cl from './_StepCard.module.scss'
import {Link} from "react-router-dom";

const StepCard = ({to, className, ...props}) => {
    return (
        <Link to={to} className={[cl.card, className].join(" ")} {...props} />
    );
};

export default StepCard;