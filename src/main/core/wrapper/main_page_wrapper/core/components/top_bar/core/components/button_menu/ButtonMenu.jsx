import React from 'react';
import Title16B from "../../../create_course/core/components/title/16/Title16B";
import cl from "./_ButtonMenu.module.scss";
import Button from "../../../../../../../../../../core/ui/button/core/components/button/Button";

const ButtonMenu = ({className, onClick, title, ...props}) => {
    return (
        <Button onClick={onClick} className={[cl.button, className].join(" ")} {...props}>
            <Title16B className={cl.title}>{title}</Title16B>
        </Button>
    );
};

export default ButtonMenu;