import React from 'react';
import cl from "./_H4.module.scss"
import clCommon from "../_H.module.scss"

const H4 = ({children, className, ...props}) => {
    return (
        <h4 className={[className, cl.title, clCommon.title].join(" ")} {...props}>{children}</h4>
    );
};

export default H4;