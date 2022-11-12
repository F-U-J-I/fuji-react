import React from 'react';
import cl from "./_ButtonDarkDefaultFR.module.scss"
import clCommon from "../_ButtonDarkFR.module.scss"
import ButtonFR from "../../core/components/ButtonFR";

const ButtonDarkDefaultFR = ({className, ...props}) => {
    return <ButtonFR className={[clCommon.button, cl.button, className].join(" ")} {...props} />
};

export default ButtonDarkDefaultFR;