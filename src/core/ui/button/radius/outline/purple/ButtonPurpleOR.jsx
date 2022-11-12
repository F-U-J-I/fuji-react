import React from 'react';
import clCommon from "../_ButtonOR.module.scss";
import cl from "./_ButtonPurpleOR.module.scss";
import Text16M from "../../../../text/16/medium/Text16M";

const ButtonPurpleOR = ({title, className, children, ...props}) => {
    return (
        <button type="button" className={[clCommon.button, cl.button, className].join(" ")} {...props}>
            <Text16M>{title}</Text16M>
            {children}
        </button>
    );
};

export default ButtonPurpleOR;