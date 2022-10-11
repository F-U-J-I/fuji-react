import React from 'react';
import getClassNameColor from "../../../../../../../../../service/rating";
import cl from "./_ItemMakeRating.module.scss";
import clColor from "../../../../../../../../rating/_Rating.module.scss";
import Text16B from "../../../../../../../../../ui/text/16/bold/Text16B";

const ItemMakeRating = ({rating, className, ...props}) => {
    const classNameColor = getClassNameColor(rating)

    return (
        <div className={[className, cl.item, classNameColor].join(" ")} {...props} >
            <Text16B className={[cl.title, clColor.title].join(" ")}>{rating}</Text16B>
        </div>
    );
};

export default ItemMakeRating;