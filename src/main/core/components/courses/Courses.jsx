import React, {Component} from 'react';
import {filterStateModalList, sortStateModalList} from "../../../../core/service/list";
import {getAddedCourses, getAllCoursesProfile, getCreatedCourses} from "../../api/courseAPI";
import {getError} from "../../../../core/service/error";
import CourseMiniList from "../../../../core/components/course/mini/list/many/CourseMiniList";
import cl from "./_Course.module.scss";
import SearchFS from "../search-filter-sort/SearchFS";

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            error: null,
            isLoad: false,
            search: '',
            filter: filterStateModalList[0],
            sorter: sortStateModalList[0],
        }
    }

    componentDidMount() {
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.path !== this.props.path) {
            this._setData()
        }
        if (prevState.filter.id !== this.state.filter.id
            || prevState.sorter.id !== this.state.sorter.id
            || prevState.search !== this.state.search) {
            this._setCourses()
        }
    }

    _setData = () => {
        this._setCourses()
        this.setState({isLoad: true})
    }

    _getCoursesWithFilter = () => {
        if (this.state.filter.id === filterStateModalList[1].id)
            return getAddedCourses
        else if (this.state.filter.id === filterStateModalList[2].id)
            return getCreatedCourses
        return getAllCoursesProfile
    }

    _getSorterParams = () => {
        if (this.state.sorter.id === sortStateModalList[0].id)
            return {ordering: '-date_added'}
        else if (this.state.sorter.id === sortStateModalList[1].id)
            return {ordering: '-course__rating'}
        else if (this.state.sorter.id === sortStateModalList[2].id)
            return {ordering: 'course__title'}
        return ''
    }

    _getSearchParams = () => {
        return {search: this.state.search}
    }

    _getParams = () => {
        return {...this._getSorterParams(), ...this._getSearchParams()}
    }

    _setFilter = (newState) => {
        this.setState({filter: newState})
    }

    _setSorter = (newState) => {
        this.setState({sorter: newState})
    }

    _setSearch = (newState) => {
        this.setState({search: newState})
    }

    _setCourses = () => {
        const params = this._getParams()
        this._getCoursesWithFilter()(this.props.path, params).then(
            r => {this.setState({courses: r.results})},
            e => {this.setState({error: e.status})},
        )
    }


    render() {
        const {courses, filter, sorter, search, error, isLoad} = this.state;
        const {...props} = this.props;
        if (error)
            return getError(error)

        let coursesHTML = null
        if (isLoad)
            coursesHTML = (<CourseMiniList courses={courses} className={cl.courses} titleError='＼(〇_ｏ)／' descriptionError='Мы ничего не нашли' />)

        return (
            <div {...props}>
                <SearchFS setFilter={this._setFilter} filter={filter}
                          setSorter={this._setSorter} sorter={sorter}
                          setSearch={this._setSearch} search={search}
                          placeHolder='Поиск курсов'/>
                {coursesHTML}
            </div>
        );
    }
}

export default Courses;