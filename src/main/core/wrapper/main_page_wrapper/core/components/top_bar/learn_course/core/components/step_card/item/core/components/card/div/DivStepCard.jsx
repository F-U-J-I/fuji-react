import React from 'react';
import cl from './_DivStepCard.module.scss'

const DivStepCard = ({active, image, className, ...props}) => {
    return (
        <div className={[cl.card, active ? cl.active : '', className].join(" ")} {...props}>
            {image &&
                <img src={image} alt='create' className={cl.create}/>
            }
        </div>
    );
};

export default DivStepCard;