import React from 'react';
import cl from './_ButtonPurpleFR.module.scss'
import ButtonR from "../../../../../core/component/button_radius/ButtonR";

const ButtonPurpleFR = ({className, ...props}) => {
    return <ButtonR className={[cl.button, className].join(" ")} {...props} />
};

export default ButtonPurpleFR;