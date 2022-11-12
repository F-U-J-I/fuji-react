import React from 'react';
import clDefault from "../_Text16.module.scss";
import clB from "./_Text16Bl.module.scss";

const Text16Bl = ({className, children, ...props}) => {
    return (
        <span className={[clDefault.text, clB.text, className].join(" ")} {...props}>{children}</span>
    );
};

export default Text16Bl;