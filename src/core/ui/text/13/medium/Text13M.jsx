import React from 'react';
import clCommon from "../_Text13.module.scss";
import cl from "./_Text13M.module.scss";

const Text13M = ({className, children, ...props}) => {
    return <span className={[className, clCommon.text, cl.text].join(" ")} {...props}>{children}</span>
};

export default Text13M;