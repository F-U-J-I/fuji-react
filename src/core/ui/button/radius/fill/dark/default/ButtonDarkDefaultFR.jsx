import React from 'react';
import clSize from "../../../../core/scss/_ButtonSize.module.scss"
import ButtonDarkFR from "../core/components/button_dark_fill_radius/ButtonDarkFR";

const ButtonDarkDefaultFR = ({className, ...props}) => {
    return <ButtonDarkFR className={[clSize.default, className].join(" ")} {...props} />
};

export default ButtonDarkDefaultFR;