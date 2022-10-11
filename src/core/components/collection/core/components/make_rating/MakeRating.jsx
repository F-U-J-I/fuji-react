import React, {useState} from 'react';
import cl from "./_MakeRating.module.scss";
import ButtonDarkFR from "../../../../../ui/button/fill-radius-dark/ButtonDarkFR";
import ListMakeRating from "./core/components/make_rating_list/ListMakeRating";
import Rated from "./core/components/rated/Rated";
import ItemMakeRatingHover from "./core/components/make_rating_item/hover/ItemMakeRatingHover";
import {createGradeCollection, updateGradeCollection} from "../../../../../../main/core/api/collectionAPI";

const NOT_RATED_STATE = 1;
const NOT_RATED_ACTIVE_STATE = 2;
const RATED_STATE = 3;

function getState(grade) {
    if (grade === null)
        return NOT_RATED_STATE
    return RATED_STATE
}

const MakeRating = ({grade, path, rating, setRating, className, ...props}) => {

    const ratingList = [1, 2, 3, 4, 5];
    const [localGrade, setLocalGrade] = useState(grade)
    // const [classNameState, setClassNameState] = useState(NOT_RATED_STATE)
    const [classNameState, setClassNameState] = useState(getState(grade))
    const [currentRating, setCurrentRating] = useState(grade)

    const handleOnClickItem = (newGrade) => {
        let callback = updateGradeCollection
        if (localGrade === null) {
            callback = createGradeCollection
        }
        callback(path, newGrade).then(
            r => {
                setCurrentRating(newGrade)
                setClassNameState(RATED_STATE)
                setLocalGrade(newGrade)
                setRating(r.rating)
            }
        )
    }

    return (
        <div className={[className, cl.rating].join(" ")} {...props}>
            {currentRating !== null &&
                <Rated rating={currentRating} path={path}
                       className={[cl.rated, classNameState === RATED_STATE ? cl.active : ''].join(" ")}
                       setRating={setRating} setState={setClassNameState} deleteState={NOT_RATED_STATE} updateState={NOT_RATED_ACTIVE_STATE}/>
            }
            <ListMakeRating className={[cl.list, classNameState === NOT_RATED_ACTIVE_STATE ? cl.active : ''].join(" ")}>
                {ratingList.map(n =>
                    <ItemMakeRatingHover key={n} rating={n} onClick={() => handleOnClickItem(n)}/>
                )}
            </ListMakeRating>
            <ButtonDarkFR className={cl.ratingButton} title='Оценить'
                          onClick={() => setClassNameState(NOT_RATED_ACTIVE_STATE)}/>
        </div>
    )
};

export default MakeRating;