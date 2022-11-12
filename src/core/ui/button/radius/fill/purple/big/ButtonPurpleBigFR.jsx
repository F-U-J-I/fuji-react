import React from 'react';
import clCommon from "../_ButtonPurpleFR.module.scss";
import cl from "./_ButtonPurpleBigFR.module.scss";
import ButtonFR from "../../core/components/ButtonFR";

const ButtonPurpleBigFR = ({className, ...props}) => {
    return <ButtonFR className={[clCommon.button, cl.button, className].join(" ")} {...props} />
};

export default ButtonPurpleBigFR;