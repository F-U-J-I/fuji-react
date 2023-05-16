import React, {Component} from 'react';
import cl from './_ButtonCompleteCourse.module.scss'
import {
    completeLearnCourse,
    developCourse, getLearnStatusCourse,
    getPublishStatusCourse,
    publishCourse,
    startLearnCourse
} from "../../../../../../../../../api/courseAPI";
import {withParams} from "../../../../../../../../../../../core/service/params";
import ButtonMenu from "../../../../core/components/button_menu/ButtonMenu";

class ButtonCompleteCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isComplete: null,
            isLoad: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.setLearnStatusCourse()
    }

    setLearnStatusCourse() {
        getLearnStatusCourse(this.props.params.path).then(r => {
            this.setState({
                isComplete: r.is_complete,
                title: this._getTitle(r.is_complete),
                isLoad: true,
            })
        })
    }

    handleOnClick = () => {
        if (this.state.isComplete)
            startLearnCourse(this.props.params.path).then(() => {
                this.setTitle(this._getTitle(false))
                this.setIsComplete(false)

            })
        else
            completeLearnCourse(this.props.params.path).then(() => {
                this.setTitle(this._getTitle(true))
                this.setIsComplete(true)
            })
    }

    _getTitle = (isComplete) => {
        if (isComplete)
            return 'Вернуться к обучению'
        return 'Завершить обучение'
    }

    setTitle(newTitle) {
        this.setState({title: newTitle})
    }

    setIsComplete(bool) {
        this.setState({isComplete: bool})
    }

    render() {
        const {className, ...props} = this.props;
        const {isLoad, title} = this.state;


        let contentHTML = null
        if (isLoad) {
            contentHTML = (
                <ButtonMenu title={title}
                            onClick={this.handleOnClick}
                            className={className}
                            {...props}/>
            )
        }

        return (
            <>
                {contentHTML}
            </>
        );
    }
}

export default withParams(ButtonCompleteCourse);