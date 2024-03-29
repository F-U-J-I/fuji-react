import React, {Component} from 'react';
import cl from '../core/scss/_CreateCoursePage.module.scss'
import CourseTitleWrapper from "../core/components/title_wrapper/course/CourseTitleWrapper";
import ThemeCardList from "../core/components/card/theme/list/ThemeCardList";
import {OtherLearnCourseWrapperContext} from "../core/wrapper/core/context/OtherLearnCourseWrapperContext";
import {getThemesCourse, getTitleCourse} from "../../../../core/api/courseAPI";
import {workshopId} from "../../../../archive/core/service/menuID";
import {getError} from "../../../../../core/service/error";
import {getImage} from "../../../../../core/api/mainAPI";
import {withParams} from "../../../../../core/service/params";

class LearnThemesPage extends Component {
    static contextType = OtherLearnCourseWrapperContext;
    constructor(props) {
        super(props);
        this.state = {
            imageCourse: null,
            title: '',
            description: '',
            themeList: [],

            isLoadTitle: false,
            isLoadList: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setDescription(null)
        // this.context.setTo(`courses/${this.props.params.path}/create/`)
        this.setTitleCourse()
        this.setThemeListCourse()
    }

    setTitleCourse() {
        getTitleCourse(this.props.params.path).then(
            r => {
                this.setState({
                    title: r.title,
                    description: r.description,
                    imageCourse: r.image_url,
                })
                this.context.setTitle(r.title)
            },
            e => {this.setState({error: e.status})},
        ).finally(() => {
            this.setState({isLoadTitle: true})
        })
    }

    setThemeListCourse() {
        getThemesCourse(this.props.params.path).then(
            r => {this.setState({themeList: r})},
            e => {this.setState({error: e.status})}
        ).finally(() => {
            this.setState({isLoadList: true})
        })
    }


    render() {
        const {imageCourse, title, description, themeList, isLoadTitle, isLoadList, error} = this.state;
        const {params} = this.props;

        if (error)
            return getError(error)

        let titleWrapper = null
        if (isLoadTitle)
            titleWrapper = (
                <CourseTitleWrapper path={params.path}
                                    title={title}
                                    description={description}
                                    image={getImage(imageCourse)}
                                    className={cl.titleWrapper} />
            )

        let themeListHTML = []
        if (isLoadList)
            themeListHTML = (
                <ThemeCardList list={themeList}
                               className={cl.cards}/>
            )

        return (
            <>
                {titleWrapper}
                {themeListHTML}
            </>
        );
    }
}

export default withParams(LearnThemesPage);