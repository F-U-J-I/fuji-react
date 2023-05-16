import React from 'react';
import cl from './_LinkStepCard.module.scss'
import {Link} from "react-router-dom";

const LinkStepCard = ({to, active, image, className, ...props}) => {
    return (
        <Link to={to} className={[cl.card, active ? cl.active : '', className].join(" ")} {...props}>
            {image &&
                <img src={image} alt='create' className={cl.create}/>
            }
        </Link>
    );
};

export default LinkStepCard;