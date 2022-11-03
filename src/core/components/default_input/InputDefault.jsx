import React from 'react';
import cl from './_InputDefault.module.scss'
import Label from "../../ui/label/Label";
import Input from "../../ui/input/default/Input";

const InputDefault = ({title, id, helpInfo, className, ...props}) => {
    return (
        <div className={[cl.wrapper, className].join(" ")}>
            <Label htmlFor={id}>{title}</Label>
            <Input className={cl.input} id={id} {...props} />
        </div>
    );
};

export default InputDefault;