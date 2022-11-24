import React from 'react';
import cl from './_ButtonContinue.module.scss'
import Text24M from "../../../../../../../../../core/ui/text/24/medium/Text24M";
import Button from "../../../../../../../../../core/ui/button/core/components/button/Button";

const ButtonContinue = ({to, className, ...props}) => {
    return (
        <Button to={to} className={[cl.button, className].join(" ")} {...props}>
            <Text24M>Продолжить</Text24M>
        </Button>
    )
};

export default ButtonContinue;