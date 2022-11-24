import React from 'react';
import cl from "./_Title16B.module.scss";
import clCommon from "../../../../../../../../../../../../core/ui/title/_H.module.scss";

const Title16B = ({children, className, ...props}) => {
    return (
        <h5 className={[className, cl.title, clCommon.title].join(" ")} {...props}>{children}</h5>
    );
};

export default Title16B;