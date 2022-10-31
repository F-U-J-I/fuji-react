import React from 'react';
import ModalWrapper from "../core/components/modal-wrapper/ModalWrapper";
import Text24M from "../../../../ui/text/24/medium/Text24M";

import cl from "./_ModalDelete.module.scss"
import ButtonDarkFOR from "../../../../ui/button/radius/fill_outline/dark/ButtonDarkFOR";
import ButtonRedFOR from "../../../../ui/button/radius/fill_outline/red/ButtonRedFOR";

const ModalDelete = ({title, description, onClickDelete, setIsVisible, className, ...props}) => {

    const handleOnClickClose = () => {
        setIsVisible(false)
    }

    return (
        <ModalWrapper className={className}
                      setIsVisible={setIsVisible}
                      title={title}
                      {...props}>
            <Text24M className={cl.description}>{description}</Text24M>
            <div className={cl.navigation}>
                <ButtonDarkFOR className={cl.navigationItem} title="Назад" onClick={handleOnClickClose}/>
                <ButtonRedFOR className={cl.navigationItem} title="Удалить" onClick={onClickDelete}/>
            </div>
        </ModalWrapper>
    );
};

export default ModalDelete;