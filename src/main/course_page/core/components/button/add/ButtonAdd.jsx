import React from 'react';
import cl from './_ButtonAdd.module.scss'
import addSVG from '../../../../../../core/static/img/add-fill-white.svg'
import Button from "../../../../../../core/ui/button/core/components/button/Button";

const ButtonAdd = ({className, ...props}) => {
    return (
        <Button className={[cl.button, className].join(" ")} {...props}>
            <img src={addSVG} alt='add' className={cl.image} />
        </Button>
    );
};

export default ButtonAdd;