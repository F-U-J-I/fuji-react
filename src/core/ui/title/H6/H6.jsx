import React from 'react';
import cl from "./_H6.module.scss"
import clCommon from "../_H.module.scss"

const H6 = ({children, className, ...props}) => {
    return (
        <h6 className={[className, cl.title, clCommon.title].join(" ")} {...props}>{children}</h6>
    );
};

export default H6;