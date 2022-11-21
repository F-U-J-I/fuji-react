import React from 'react';
import clSize from "../../../../core/scss/_ButtonSize.module.scss";
import ButtonPurpleFR from "../core/components/button_purple_fill_radius/ButtonPurpleFR";

const ButtonPurpleBigFR = ({className, ...props}) => {
    return <ButtonPurpleFR className={[clSize.big, className].join(" ")} {...props} />
};

export default ButtonPurpleBigFR;