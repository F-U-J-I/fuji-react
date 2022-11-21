import React, {Component} from 'react';
import cl from './_CoursePage.module.scss'
import {MainPageWrapperContext} from "../core/context/Context";
import {TOP_MENU_COURSE_PAGE} from "../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {getPageCourse} from "../core/api/courseAPI";
import {withParams} from "../../core/service/params";
import {getImage} from "../../core/api/mainAPI";
import H5 from "../../core/ui/title/H5/H5";
import H1 from "../../core/ui/title/H1/H1";
import ButtonFree from "./core/components/button/free/ButtonFree";
import ButtonAdd from "./core/components/button/add/ButtonAdd";
import {getError} from "../../core/service/error";

class CoursePage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            course: [],
            isLoad: false,
            error: null
        }
    }

    componentDidMount() {
        this._setData().then()
    }

    async _setData() {
        this.context.setMin(true)
        this.context.setActiveId(null)
        this.context.setTopMenu(TOP_MENU_COURSE_PAGE)
        this._setCoursePage()
    }

    _setCoursePage() {
        getPageCourse(this.props.params.path).then(
            r => {this.setState({course: r, isLoad: true})},
            e => {this.setState({error: e, isLoad: true})},
        )
    }

    render() {
        const {course, isLoad, error} = this.state;

        if (error)
            return getError(error)

        let mainHTML = null;
        if (isLoad) {
            console.log(course.course)
            mainHTML = (
                <div className={cl.main}>
                    <div className={cl.mainWallpaper}>
                        <img src={getImage(course.course.image_url)} alt="wallpaper" className={cl.mainWallpaperImage}/>
                        <div className={cl.mainWallpaperDark}/>
                    </div>
                    <div className={cl.mainContent}>
                        <H5 className={cl.mainContentAuthor}>{course.course.author.username}</H5>
                        <H1 className={cl.mainContentTitle}>{course.course.title}</H1>
                        <div className={cl.mainContentNavigations}>
                            <ButtonFree title='Бесплатно' className={cl.mainContentNavigationsButton}/>
                            <ButtonAdd className={cl.mainContentNavigationsButton}/>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {mainHTML}
            </div>
        );
    }
}

export default withParams(CoursePage);