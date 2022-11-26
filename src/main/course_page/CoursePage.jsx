import React, {Component} from 'react';
import cl from './_CoursePage.module.scss'
import {MainPageWrapperContext} from "../core/context/Context";
import {TOP_MENU_COURSE_PAGE} from "../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {getPageCourse} from "../core/api/courseAPI";
import {withParams} from "../../core/service/params";
import {getError} from "../../core/service/error";
import MainCoursePart from "./core/components/main_part/MainCoursePart";
import PurposeCoursePart from "./core/components/purpose_part/PurposeCoursePart";
import FitsCoursePart from "./core/components/fits_part/FitsCoursePart";
import SkillsCoursePart from "./core/components/skills_part/SkillsCoursePart";
import ThemesCoursePart from "./core/components/themes_part/ThemesCoursePart";
import RatingCoursePart from "./core/components/rating_part/RatingCoursePart";

class CoursePage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            course: {},
            rating: null,
            grade: null,
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
            r => {
                this.setState({
                    course: r,
                    rating: r.course.rating.value,
                    grade: r.course.rating.grade,
                    isLoad: true
                })
            },
            e => {this.setState({error: e, isLoad: true})},
        )
    }

    setRating = (newRating) => {
        this.setState({rating: newRating})
    }

    setGrade = (newGrade) => {
        this.setState({grade: newGrade})
    }

    render() {
        const {course, rating, grade, isLoad, error} = this.state;
        const {path} = this.props.params;
        const {addedCollectionList} = this.context;

        if (error)
            return getError(error)

        let mainHTML = null;
        let purposeHTML = null;
        let fitsHTML = null;
        let skillsHTML = null;
        let themesHTML = null;
        let ratingHTML = null;
        if (isLoad) {
            console.log(course.themes.length)
            mainHTML = (
                <MainCoursePart course={course.course}
                                rating={rating}
                                image={course.info.main_info.title_image_url}
                                addedCollections={addedCollectionList} />
            )
            if (course.info.main_info.goal_description !== null)
                purposeHTML = <PurposeCoursePart description={course.info.main_info.goal_description}
                                                 className={cl.block} />

            if (course.info.fits.length > 0)
                fitsHTML = <FitsCoursePart fits={course.info.fits} className={cl.block} />

            if (course.info.skills.length > 0)
                skillsHTML = <SkillsCoursePart skills={course.info.skills} className={cl.block} />

            if (course.themes.length > 0)
                themesHTML = <ThemesCoursePart themes={course.themes} className={cl.block} />

            if (course.themes.length > 0)
                ratingHTML = <RatingCoursePart path={path}
                                               rating={rating} setRating={this.setRating}
                                               grade={grade} setGrade={this.setGrade}
                                               className={cl.block} />
        }
        return (
            <div>
                {mainHTML}
                <div className={cl.content}>
                    {purposeHTML}
                    {fitsHTML}
                    {skillsHTML}
                    {themesHTML}
                    {ratingHTML}
                </div>
            </div>
        );
    }
}

export default withParams(CoursePage);