import React, {useState} from 'react';
import getClassNameColor from "../../../../../../../../../../service/rating";
import cl from "../default/_ItemMakeRating.module.scss";
import clColor from "../../../../../../../../../rating/_Rating.module.scss";
import Text16B from "../../../../../../../../../../ui/text/16/bold/Text16B";
import {addList, removeList} from "../../../../../../../../../../service/list";

const ItemMakeRatingHover = ({rating, className, ...props}) => {
    const classNameColor = getClassNameColor(rating)
    const [classList, setClassList] = useState([className, cl.item])

    const handleOnMouseEnter = () => {
        setClassList(addList(classNameColor, classList))
    }

    const handleOnMouseLeave = () => {
        setClassList(removeList(classNameColor, classList))
    }

    return (
        <div className={classList.join(" ")} {...props} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <Text16B className={[cl.title, clColor.title].join(" ")}>{rating}</Text16B>
        </div>
    );
};

export default ItemMakeRatingHover;