import React, {Component} from 'react';
import cl from "./_MakeRating.module.scss";
import ButtonDarkDefaultFR from "../../../../../../ui/button/radius/fill/dark/default/ButtonDarkDefaultFR";
import ListMakeRating from "./core/components/make_rating_list/ListMakeRating";
import Rated from "./core/components/rated/Rated";
import ItemMakeRatingHover from "./core/components/make_rating_item/hover/ItemMakeRatingHover";
import {createGradeCollection, updateGradeCollection} from "../../../../../../../main/core/api/collectionAPI";

const NOT_RATED_STATE = 1;
const NOT_RATED_ACTIVE_STATE = 2;
const RATED_STATE = 3;

function getState(grade) {
    if (grade === null)
        return NOT_RATED_STATE
    return RATED_STATE
}


class MakeRating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            grade: props.grade,
            rating: props.rating,
            localGrade: props.grade,
            currentRating: props.grade,
            classNameState: getState(this.props.grade)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.path !== prevProps.path) {
            this.setState({
                grade: this.props.grade,
                rating: this.props.rating,
                localGrade: this.props.grade,
                classNameState: getState(this.props.grade),
                currentRating: this.props.grade,
            })
        }
    }

    handleOnClickItem = (newGrade) => {
        let callback = updateGradeCollection
        if (this.state.localGrade === null) {
            callback = createGradeCollection
        }
        callback(this.props.path, newGrade).then(
            r => {
                this.props.setGrade(newGrade)
                this.setState({
                    rating: r.rating,
                    localGrade: newGrade,
                    classNameState: RATED_STATE,
                    currentRating: newGrade,
                })
                this.props.setRating(r.rating)
            }
        )
    }

    _swapClassNameState = (newClassNameState) => {
        const oldState = this.state.classNameState;
        this._setClassNameState(newClassNameState)

        if (newClassNameState === NOT_RATED_STATE
            && oldState !== NOT_RATED_STATE) {
            this.props.setCountRatings(this.props.countRatings - 1)
        } else if (newClassNameState === NOT_RATED_ACTIVE_STATE
            && oldState === NOT_RATED_STATE) {
            this.props.setCountRatings(this.props.countRatings + 1)
        }
    }

    _setClassNameState = (newClassNameState) => {
        this.setState({classNameState: newClassNameState})
    }

    render() {
        const {className, path, countRatings, setRating, setCountRatings, setGrade, ...props} = this.props;
        const {classNameState, currentRating} = this.state;

        const ratingList = [1, 2, 3, 4, 5];

        return (
            <div className={[className, cl.rating].join(" ")} {...props}>
                {currentRating !== null &&
                    <Rated rating={currentRating} path={path}
                           className={[cl.rated, classNameState === RATED_STATE ? cl.active : ''].join(" ")}
                           setRating={setRating} setState={this._swapClassNameState}
                           nameState={classNameState} deleteState={NOT_RATED_STATE} updateState={NOT_RATED_ACTIVE_STATE}/>
                }
                <ListMakeRating
                    className={[cl.list, classNameState === NOT_RATED_ACTIVE_STATE ? cl.active : ''].join(" ")}>
                    {ratingList.map(n =>
                        <ItemMakeRatingHover key={n} rating={n} onClick={() => this.handleOnClickItem(n)}/>
                    )}
                </ListMakeRating>
                <ButtonDarkDefaultFR className={cl.ratingButton} title='Оценить'
                                     onClick={() => this._swapClassNameState(NOT_RATED_ACTIVE_STATE)}/>
            </div>
        )
    }
}

export default MakeRating;