import React from 'react';
import cl from "./_Title12B.module.scss";
import clCommon from "../../../../../../../../../../../../core/ui/title/_H.module.scss";

const Title12B = ({children, className, ...props}) => {
    return (
        <h6 className={[className, cl.title, clCommon.title].join(" ")} {...props}>{children}</h6>
    );
};

export default Title12B;