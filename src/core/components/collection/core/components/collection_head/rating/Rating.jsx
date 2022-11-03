import React, {Component} from 'react';
import cl from './_Rating.module.scss'
import clColor from '../../../../../rating/_Rating.module.scss'
import Text16B from "../../../../../../ui/text/16/bold/Text16B";
import getClassNameColor from "../../../../../../service/rating";
import ModalPurpleFR from "../../../../../modal/purple_fill_radius/ModalPurpleFR";

const getRatingView = (rating) => {
    if (rating === '0.0')
        return 'Нет оценок'
    return rating
}

const getRatingText = (countRatings) => {
    if (countRatings === 0)
        return 'Нет оценок'
    // 11..19; x5..x9; x0
    else if ((countRatings > 10 && countRatings < 20) || (countRatings % 10 > 4 || countRatings % 10 === 0))
        return 'оценок'
    // x1, (кроме 11..19)
    else if (countRatings % 10 === 1)
        return 'оценка'
    return 'оценки'
}

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countRatings: props.countRatings
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.countRatings !== this.state.countRatings) {
            // console.log(this.props.countRatings)
            // console.log(this.state.countRatings)
            this.setState({
                countRatings: this.props.countRatings
            })
        }
    }

    render() {
        const {className, rating} = this.props;
        const {countRatings} = this.state;

        let classNameColor = getClassNameColor(rating)
        let ratingView = getRatingView(rating)
        const ratingText = getRatingText(parseInt(countRatings))

        return (
            <div className={[cl.block, className].join(" ")}>
                {countRatings !== 0 &&
                    <div className={cl.active}>
                        <ModalPurpleFR title={countRatings} description={` ${ratingText}`} className={cl.activeModal}/>
                    </div>
                }
                <div className={[cl.rating, classNameColor].join(' ')}>
                    <Text16B className={[cl.title, clColor.title].join(' ')}>{ratingView}</Text16B>
                </div>
            </div>
        );
    }
}

export default Rating;