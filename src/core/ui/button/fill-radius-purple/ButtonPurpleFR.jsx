import React from 'react';
import cl from "./_ButtonPurpleFR.module.scss"

const ButtonPurpleFR = ({className, children, ...props}) => {
    return (
        <button className={[className, cl.button].join(" ")} {...props}>{children}</button>
    );
};

export default ButtonPurpleFR;