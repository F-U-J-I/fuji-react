import React from 'react';
import cl from './_StepCard.module.scss'
import {Link} from "react-router-dom";

const StepCard = ({to, active,  className, ...props}) => {
    return (
        <Link to={to} className={[cl.card, active ? cl.active : '', className].join(" ")} {...props} />
    );
};

export default StepCard;