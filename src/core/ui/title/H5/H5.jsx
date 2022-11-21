import React from 'react';
import cl from "./_H5.module.scss"
import clCommon from "../_H.module.scss"

const H5 = ({children, className, ...props}) => {
    return (
        <h5 className={[className, cl.title, clCommon.title].join(" ")} {...props}>{children}</h5>
    );
};

export default H5;