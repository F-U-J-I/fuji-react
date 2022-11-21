import React from 'react';
import Button from "../../../../core/components/button/Button";
import cl from './_ButtonR.module.scss'

const ButtonR = ({className, ...props}) => {
    return <Button className={[cl.radius, className].join(" ")} {...props} />
};

export default ButtonR;