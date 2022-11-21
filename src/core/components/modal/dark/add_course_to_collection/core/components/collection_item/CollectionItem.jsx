import React, {useState} from 'react';
import cl from './_CollectionItem.module.scss'
import H6 from "../../../../../../../ui/title/H6/H6";
import {getImage} from "../../../../../../../api/mainAPI";
import checkMarkSVG from '../../../../../../../static/img/check-mark-fill-green.svg'

const CollectionItem = ({path, title, preview, isAdded, onClick, className, ...props}) => {
    const [isAddedLocal, setIsAddedLocal] = useState(isAdded)
    const handleOnClick = () => {
        onClick(path, isAddedLocal)
        setIsAddedLocal(!isAddedLocal)
    }

    return (
        <div className={[cl.collectionItem, className, isAddedLocal ? cl.active : ''].join(" ")} onClick={handleOnClick} {...props}>
            <img src={getImage(preview)} className={cl.image} alt='preview'/>
            <H6 className={cl.title}>{title}</H6>
            {isAddedLocal &&
                <img src={checkMarkSVG} alt='yes' className={cl.checkImage} />
            }
        </div>
    );
};

export default CollectionItem;