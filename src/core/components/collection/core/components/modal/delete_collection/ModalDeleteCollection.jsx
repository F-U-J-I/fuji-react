import React from 'react';
import ModalDelete from "../../../../../modal/dark/delete/ModalDelete";
import {deleteCollection} from "../../../../../../../main/core/api/collectionAPI";
import {useNavigate} from "react-router";

const ModalDeleteCollection = ({onClickDelete, path, setIsVisible, ...props}) => {
    const description = "Эта подборка удалится безвозвратно. Вы точно хотите удалить её?"

    // static contextType = MainPageWrapperContext;
    const navigate = useNavigate();
    const handleOnClickDelete = () => {
        deleteCollection(path).then(
            () => {
                setIsVisible(false)
                onClickDelete()
                navigate('/')
            },
            e => {
                console.log(e)
            }
        )
    }

    return (
        <ModalDelete
            title="Удалить подборку"
            description={description}
            onClickDelete={handleOnClickDelete}
            setIsVisible={setIsVisible}
            {...props} />
    );
};

export default ModalDeleteCollection;
