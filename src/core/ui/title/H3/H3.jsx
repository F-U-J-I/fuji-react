import React from 'react';
import cl from "./_H3.module.scss";
import clCommon from "../_H.module.scss"

const H3 = ({children, className, ...props}) => {
    return (
        <h3 className={[className, cl.title, clCommon.title].join(" ")} {...props}>{children}</h3>
    );
};

export default H3;