import React, {Component} from 'react';
import clCommon from '../core/scss/_CreateCoursePage.module.scss'
import LessonCardList from "../core/components/card/lesson/list/LessonCardList";
import {OtherCreateCourseWrapperContext} from "../core/wrapper/core/context/OtherCreateCourseWrapperContext";
import {getLessonsCourse, getTitleCourse, getTitleTheme} from "../../../../core/api/courseAPI";
import {getError} from "../../../../../core/service/error";
import ThemeTitleWrapper from "../core/components/title_wrapper/theme/ThemeTitleWrapper";
import {getImage} from "../../../../../core/api/mainAPI";
import {withParams} from "../../../../../core/service/params";
import {workshopId} from "../../../../archive/core/service/menuID";
import ButtonBack from "../../core/components/back/ButtonBack";

class LessonsPage extends Component {
    static contextType = OtherCreateCourseWrapperContext;
    constructor(props) {
        super(props);
        this.state = {
            imageTheme: null,
            to: `/courses/${this.props.params.path}/create/${this.props.params.pathTheme}/`,
            toBack: `./../`,
            title: '',
            lessonList: [],

            isLoadTitle: false,
            isLoadList: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setTo(this.state.to)
        this.context.setMenuId(workshopId)
        this.setTopMenu()
        this.setTitleTheme()
        this.setLessonListCourse()
    }

    setTopMenu() {
        getTitleCourse(this.props.params.path).then(
            r => {this.context.setDescription(r.title)},
            e => {this.setState({error: e.status})},
        )
    }

    setTitleTheme() {
        getTitleTheme(this.props.params.path, this.props.params.pathTheme).then(
            r => {
                this.setState({
                    title: r.title,
                    imageTheme: r.image_url,
                })
                this.context.setTitle(r.title)
            },
            e => {this.setState({error: e.status})},
        ).finally(() => {
            this.setState({isLoadTitle: true})
        })
    }

    setLessonListCourse() {
        getLessonsCourse(this.props.params.path, this.props.params.pathTheme).then(
            r => {this.setState({lessonList: r})},
            e => {this.setState({error: e.status})}
        ).finally(() => {
            this.setState({isLoadList: true})
        })
    }

    setTitle = (newTitle) => {
        this.setState({title: newTitle})
    }

    render() {
        const {imageTheme, title, lessonList, toBack, isLoadTitle, isLoadList, error} = this.state;
        const {path, pathTheme} = this.props.params;

        if (error)
            return getError(error)

        let titleWrapper = null
        if (isLoadTitle)
            titleWrapper = (
                <ThemeTitleWrapper pathCourse={path}
                                   pathTheme={pathTheme}
                                   title={title}
                                   setTitle={this.setTitle}
                                   image={getImage(imageTheme)}
                                   className={clCommon.titleWrapper} />
            )

        let listHTML = null
        if (isLoadList)
            listHTML = (
                <LessonCardList pathCourse={path}
                                pathTheme={pathTheme}
                                list={lessonList}
                                className={clCommon.cards} />
            )

        return (
            <>
                <ButtonBack title='Назад' to={toBack} />
                {titleWrapper}
                {listHTML}
            </>
        );
    }
}

export default withParams(LessonsPage);