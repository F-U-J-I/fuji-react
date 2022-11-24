import React from 'react';
import ModalDelete from "../../../../../../../../../../../../core/components/modal/dark/delete/ModalDelete";

const ModalDeleteCard = ({titleModal, onClickSubmit, setIsVisible, ...props}) => {
    const description = 'Эта тема и все уроки и степы входящие в нее удалятся безвозвратно. Вы точно хотите удалить её?\n'

    return (
        <ModalDelete title={titleModal}
                     description={description}
                     onClickDelete={onClickSubmit}
                     setIsVisible={setIsVisible}
                     {...props}/>
    );
};

export default ModalDeleteCard;