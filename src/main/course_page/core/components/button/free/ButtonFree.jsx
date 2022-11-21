import React from 'react';
import cl from './_ButtonFree.module.scss'
import Text24M from "../../../../../../core/ui/text/24/medium/Text24M";
import Button from "../../../../../../core/ui/button/core/components/button/Button";

const ButtonFree = ({title, className, ...props}) => {
    return (
        <Button className={[cl.button, className].join(" ")} {...props}>
            <Text24M>{title}</Text24M>
        </Button>
    );
};

export default ButtonFree;