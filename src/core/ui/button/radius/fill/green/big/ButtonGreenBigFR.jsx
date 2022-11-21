import React from 'react';
import clSize from "../../../../core/scss/_ButtonSize.module.scss";
import ButtonGreenFR from "../core/components/button/ButtonGreenFR";

const ButtonGreenBigFR = ({className, ...props}) => {
    return <ButtonGreenFR className={[clSize.big, className].join(" ")} {...props} />
};

export default ButtonGreenBigFR;