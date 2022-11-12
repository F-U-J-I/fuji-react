import React from 'react';
import cl from "./_ButtonSign.module.scss";

const ButtonSign = ({className, children, ...props}) => {
    return (
        <button className={[className, cl.button].join(" ")} {...props}>{children}</button>
    );
};

export default ButtonSign;