import React from 'react';
import cl from "../../../../../core/components/collection_head/rating/_Rating.module.scss";
import clColor from "../../../../../../rating/_Rating.module.scss";
import getClassNameColor from "../../../../../../../service/rating";
import Text14B from "../../../../../../../ui/text/14/bold/Text14B";

const RatingCollectionMini = ({rating, className, ...props}) => {
    let classNameColor = getClassNameColor(rating)
    return (
        <div className={[cl.rating, classNameColor, className].join(' ')} {...props}>
            <Text14B className={[cl.title, clColor.title].join(' ')}>{rating}</Text14B>
        </div>
    );
};

export default RatingCollectionMini;