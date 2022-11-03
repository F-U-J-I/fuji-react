import React from 'react';
import cl from "./_Text14M.module.scss"
import clCommon from "../_Text14.module.scss"

const Text14M = ({className, children, ...props}) => {
    return (
        <p className={[className, cl.text, clCommon.text].join(" ")} {...props}>{children}</p>
    );
};

export default Text14M;