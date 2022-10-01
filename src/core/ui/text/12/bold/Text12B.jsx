import React from 'react';
import clCommon from "../_Text12.module.scss";
import cl from "./_Text12B.module.scss";

const Text12B = ({className, children, ...props}) => {
    return <span className={[className, clCommon.text, cl.text].join(" ")} {...props}>{children}</span>
};

export default Text12B;