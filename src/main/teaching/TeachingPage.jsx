import React, {Component} from 'react';
import cl from './_TeachingPage.module.scss'
import {MainPageWrapperContext} from "../core/context/Context";
import {TOP_MENU_DEFAULT} from "../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {getCreatedCourses} from "../core/api/courseAPI";
import {getError} from "../../core/service/error";
import SystemDetailCollection from "../../core/components/collection/big/system/detail/SystemDetailCollection";
import SearchDefault from "../core/ui/search/search_default/SearchDefault";
import CourseBigList from "../../core/components/course/big/default/list/CourseBigList";
import ButtonCreateCourse from "./core/components/create_course/ButtonCreateCourse";

class TeachingPage extends Component {
    static contextType = MainPageWrapperContext;
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            search: '',
            isLoad: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.search !== this.state.search)
            this._setCreatedCourses()
    }

    _setData() {
        this.context.setActiveId(null)
        this.context.setMin(false)
        this.context.setTopMenu(TOP_MENU_DEFAULT)
        this._setCreatedCourses()
    }

    _getSearchParams = () => {
        return {search: this.state.search}
    }

    _setCreatedCourses() {
        const path = sessionStorage.getItem('path')
        const params = this._getSearchParams()
        getCreatedCourses(path, params).then(
            r => {this.setState({courses: r.results, isLoad: true})},
            e => {this.setState({error: e.status, isLoad: true})},
        )
    }

    setSearch = (value) => {
        this.setState({search: value})
    }

    render() {
        const {courses, search, isLoad, error} = this.state;
        if (error)
            return getError(error)

        let coursesHTML = []
        if (isLoad) {
            coursesHTML = <CourseBigList courses={courses}
                                         titleEmpty='＼(〇_ｏ)／'
                                         descriptionEmpty='Мы ничего не нашли'
                                         className={cl.courses} />
        }

        return (
            <div className={cl.block}>

                <ButtonCreateCourse className={cl.button} />
                <SystemDetailCollection title="Ваши курсы" className={cl.wrapper}>
                    <SearchDefault setSearch={this.setSearch} search={search}
                                   placeHolder='Поиск курсов' className={cl.search}/>
                    {coursesHTML}
                </SystemDetailCollection>
            </div>
        );
    }
}

export default TeachingPage;