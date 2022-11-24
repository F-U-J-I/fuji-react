import React, {Component} from 'react';
import cl from './_ButtonPublishCourse.module.scss'
import Button from "../../../../../../../../../../../core/ui/button/core/components/button/Button";
import Title16B from "../title/16/Title16B";
import {developCourse, getPublishStatusCourse, publishCourse} from "../../../../../../../../../api/courseAPI";
import {withParams} from "../../../../../../../../../../../core/service/params";

class ButtonPublishCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isPublish: null,
            isLoad: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.setPublishStatusCourse()
    }

    setPublishStatusCourse() {
        getPublishStatusCourse(this.props.params.path).then(r => {
            this.setState({
                isPublish: r.is_publish,
                title: this._getTitle(r.is_publish),
                isLoad: true,
            })
        })
    }

    handleOnClick = () => {
        if (this.state.isPublish)
            developCourse(this.props.params.path).then(() => {
                this.setTitle(this._getTitle(false))
                this.setIsPublish(false)

            })
        else
            publishCourse(this.props.params.path).then(() => {
                this.setTitle(this._getTitle(true))
                this.setIsPublish(true)
            })
    }

    _getTitle = (isPublish) => {
        if (isPublish)
            return 'Курс в мастерскую'
        return 'Опубликовать курс'
    }

    setTitle(newTitle) {
        this.setState({title: newTitle})
    }

    setIsPublish(bool) {
        this.setState({isPublish: bool})
    }

    render() {
        const {className, ...props} = this.props;
        const {isLoad, title} = this.state;

        let titleHTML = null
        if (isLoad) {
            titleHTML = <Title16B className={cl.title}>{title}</Title16B>
        }
        return (
            <Button onClick={this.handleOnClick} className={[cl.button, className].join(" ")} {...props}>
                {titleHTML}
            </Button>
        );
    }
}

export default withParams(ButtonPublishCourse);