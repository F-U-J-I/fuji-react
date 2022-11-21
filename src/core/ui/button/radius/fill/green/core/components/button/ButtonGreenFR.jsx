import React from 'react';
import cl from './_ButtonGreenFR.module.scss'
import ButtonR from "../../../../../core/component/button_radius/ButtonR";

const ButtonGreenFR = ({className, ...props}) => {
    return <ButtonR className={[cl.button, className].join(" ")} {...props} />
};

export default ButtonGreenFR;