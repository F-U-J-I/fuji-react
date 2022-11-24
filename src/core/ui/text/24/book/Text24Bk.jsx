import React from 'react';
import clCommon from "../_Text24.module.scss";
import cl from "./_Text24Bk.module.scss";

const Text24Bk = ({className, children, ...props}) => {
    return <span className={[className, clCommon.text, cl.text].join(" ")} {...props}>{children}</span>
};

export default Text24Bk;