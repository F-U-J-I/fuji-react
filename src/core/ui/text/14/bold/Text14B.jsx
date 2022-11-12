import React from 'react';
import cl from "./_Text14B.module.scss"
import clCommon from "../_Text14.module.scss"

const Text14B = ({className, children, ...props}) => {
    return (
        <p className={[className, cl.text, clCommon.text].join(" ")} {...props}>{children}</p>
    );
};

export default Text14B;