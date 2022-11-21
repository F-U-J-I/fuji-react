import React from 'react';
import cl from './_ButtonDarkFR.module.scss'
import ButtonR from "../../../../../core/component/button_radius/ButtonR";

const ButtonDarkFR = ({className, ...props}) => {
    return <ButtonR className={[cl.button, className].join(" ")} {...props} />
};

export default ButtonDarkFR;