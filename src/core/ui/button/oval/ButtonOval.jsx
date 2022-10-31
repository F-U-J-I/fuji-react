import React from 'react';
import cl from './_ButtonOval.module.scss'

const ButtonOval = ({className, image, ...props}) => {
    return (
        <button className={[cl.button, className].join(" ")} {...props}>
            <img src={image} alt='icon' className={cl.image}/>
        </button>
    );
};

export default ButtonOval;