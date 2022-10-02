import React from 'react';
import cl from "./_ButtonDarkFR.module.scss"
import Text16M from "../../text/16/medium/Text16M";

const ButtonDarkFR = ({title, className, ...props}) => {
    return (
        <button className={[cl.button, className].join(" ")} {...props}>
            <Text16M>{title}</Text16M>
        </button>
    );
};

export default ButtonDarkFR;