import React from 'react';
import ModalEdit from "../../../../../modal/dark/edit/ModalEdit";

const ModalEditCollection = ({path, onClickSubmit, setIsVisible, ...props}) => {

    return (
        <ModalEdit
            path={path}
            titleModal="Редактирование подборки"
            onClickSubmit={onClickSubmit}
            setIsVisible={setIsVisible}
            {...props} />
    );
};

export default ModalEditCollection;
