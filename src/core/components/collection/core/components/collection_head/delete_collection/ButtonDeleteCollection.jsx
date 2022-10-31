import React, {useState} from 'react';
import deleteSVG from "../../../../../../static/img/trash-fill-white.svg";
import ButtonOval from "../../../../../../ui/button/oval/ButtonOval";
import ModalDeleteCollection from "../../modal/delete_collection/ModalDeleteCollection";

const ButtonDeleteCollection = ({onClickDelete, path, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(false)
    const handleDeleteOnClick = () => {
        setIsVisible(true)
    }
    return (
        <>
            <ButtonOval image={deleteSVG} className={className} onClick={handleDeleteOnClick} {...props} />
            {isVisible &&
                <ModalDeleteCollection onClickDelete={onClickDelete} path={path} setIsVisible={setIsVisible} />
            }
        </>

    );
};

export default ButtonDeleteCollection;