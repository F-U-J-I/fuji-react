import React from 'react';
import cl from "./_H1.module.scss";
import clCommon from "../_H.module.scss"

const H1 = ({children, className, ...props}) => {
    return (
        <h2 className={[className, cl.title, clCommon.title].join(" ")} {...props}>{children}</h2>
    );
};

export default H1;