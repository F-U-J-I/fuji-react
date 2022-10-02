import React, {useState} from 'react';
import cl from "./_MakeRating.module.scss";
import ButtonDarkFR from "../../../../../ui/button/fill-radius-dark/ButtonDarkFR";
import {getNumber} from "../../../../../service/number";

const MakeRating = ({count_ratings, className, ...props}) => {
    const [ratingButtonText, setRatingButtonText] = useState("Оценить")
    const getRating = () => {
        if (count_ratings === 0)
            return "Нет оценок"
        return getNumber(count_ratings)
    }

    return (
        <div className={className} {...props}>
            <ButtonDarkFR
                className={cl.ratingButton}
                title={ratingButtonText}
                onMouseEnter={() => setRatingButtonText(getRating)}
                onMouseLeave={() => setRatingButtonText("Оценить")}
            />
        </div>
    )
};

export default MakeRating;