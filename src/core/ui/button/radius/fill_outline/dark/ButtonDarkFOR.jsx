import React from 'react';

import cl from "./_ButtonDarkFOR.module.scss";
import clCommon from "../_ButtonFOR.module.scss";

import Text16M from "../../../../text/16/medium/Text16M";

const ButtonDarkFOR = ({className, title, ...props}) => {
    return (
        <button type="button" className={[clCommon.button, cl.button, className].join(" ")} {...props}>
            <Text16M>{title}</Text16M>
        </button>
    );
};

export default ButtonDarkFOR;