import React from 'react';
import clSize from "../../../../core/scss/_ButtonSize.module.scss";
import ButtonPurpleOR from "../core/components/button_purple_outline_radius/ButtonPurpleOR";

const ButtonPurpleVeryBigOR = ({className, ...props}) => {
    return <ButtonPurpleOR className={[clSize.veryBig, className].join(" ")} {...props} />
};

export default ButtonPurpleVeryBigOR;