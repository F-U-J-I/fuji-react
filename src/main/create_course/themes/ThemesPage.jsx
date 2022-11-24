import React, {Component} from 'react';
import cl from './_ThemesPage.module.scss'
import {CreateCourseWrapperContext} from "../core/wrapper/core/context/CreateCourseWrapperContext";
import {withParams} from "../../../core/service/params";
import {getThemesCourse, getTitleCourse} from "../../core/api/courseAPI";
import {getError} from "../../../core/service/error";
import {getImage} from "../../../core/api/mainAPI";
import CourseTitleWrapper from "../core/components/title_wrapper/course/CourseTitleWrapper";
import {workshopId} from "../../archive/core/service/menuID";
import ThemeCardList from "../core/components/card/theme/list/ThemeCardList";

class ThemesPage extends Component {
    static contextType = CreateCourseWrapperContext;
    constructor(props) {
        super(props);
        this.state = {
            imageCourse: null,
            title: '',
            description: '',
            themeList: [],

            isLoadTitleCourse: false,
            isLoadThemeListCourse: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setMenuId(workshopId)
        this.context.setTo(`courses/${this.props.params.path}/create/`)
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
            this.setState({isLoadTitleCourse: true})
        })
    }

    setThemeListCourse() {
        getThemesCourse(this.props.params.path).then(
            r => {this.setState({themeList: r})},
            e => {this.setState({error: e.status})}
        ).finally(() => {
            this.setState({isLoadThemeListCourse: true})
        })
    }

    render() {
        const {imageCourse, title, description, themeList, isLoadTitleCourse, isLoadThemeListCourse, error} = this.state;
        const {params} = this.props;

        if (error)
            return getError(error)

        let titleWrapper = null
        if (isLoadTitleCourse)
            titleWrapper = (
                <CourseTitleWrapper title={title}
                                    description={description}
                                    image={getImage(imageCourse)} className={cl.titleWrapper} />
            )

        let themeListHTML = []
        if (isLoadThemeListCourse)
            themeListHTML = (
                <ThemeCardList list={themeList}
                               coursePath={params.path}
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

export default withParams(ThemesPage);