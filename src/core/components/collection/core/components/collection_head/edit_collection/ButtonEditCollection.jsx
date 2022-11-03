import React, {useState} from 'react';
import editSVG from "../../../../../../static/img/edit-fill-white.svg";
import ButtonOval from "../../../../../../ui/button/oval/ButtonOval";
import ModalEditCollection from "../../modal/edit_collection/ModalEditCollection";

const ButtonEditCollection = ({path, onClickSubmit, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(false)
    const handleEditOnClick = () => {
        setIsVisible(true)
    }
    return (
        <>
            <ButtonOval image={editSVG} className={className} onClick={handleEditOnClick} {...props} />
            {isVisible &&
                <ModalEditCollection onClickSubmit={onClickSubmit} path={path} setIsVisible={setIsVisible} {...props} />
            }
        </>

    );
};

export default ButtonEditCollection;