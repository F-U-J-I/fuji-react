import React from 'react';
import ButtonPurpleOR from "../core/components/button_purple_outline_radius/ButtonPurpleOR";
import clSize from "../../../../core/scss/_ButtonSize.module.scss";

const ButtonPurpleBigOR = ({className, ...props}) => {
    return <ButtonPurpleOR className={[clSize.big, className].join(" ")} {...props} />
};

export default ButtonPurpleBigOR;