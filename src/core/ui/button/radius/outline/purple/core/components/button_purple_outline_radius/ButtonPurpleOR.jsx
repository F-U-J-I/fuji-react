import React from 'react';
import ButtonR from "../../../../../core/component/button_radius/ButtonR";
import cl from "./_ButtonPurpleOR.module.scss";

const ButtonPurpleOR = ({className, ...props}) => {
    return <ButtonR className={[cl.button, className].join(" ")} {...props} />
};

export default ButtonPurpleOR;