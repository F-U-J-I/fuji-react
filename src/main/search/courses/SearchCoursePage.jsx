import React, {Component} from 'react';
import {SearchWrapperPageContext} from "../core/wrapper/core/context/SearchWrapperPageContext";
import {courseId, menuList} from "../../../core/service/list";
import {getCourses} from "../../core/api/courseAPI";
import {getError} from "../../../core/service/error";
import SystemDetailCollection from "../../../core/components/collection/big/system/detail/SystemDetailCollection";
import CourseBigList from "../../../core/components/course/big/list/CourseBigList";

class SearchCoursePage extends Component {
    static contextType = SearchWrapperPageContext;

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
        this.context.setActiveId(courseId)
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.context.search !== this.state.search)
            this._setData()
    }

    _setData() {
        this._setSearch()
        this._getCourses()
        this.setState({isLoad: true})
    }

    _setSearch() {
        this.setState({search: this.context.search})
    }

    _getParams() {
        return {
            search: this.state.search,
            ordering: '-rating'
        }
    }

    _getCourses() {
        const params = {limit: 10, ...this._getParams()}
        getCourses(params).then(
            r => {this.setState({courses: r.results})},
            e => {this.setState({error: e.status})}
        )
    }

    render() {
        const {courses, isLoad, error} = this.state;
        const {addedCollectionList} = this.context;
        if (error)
            return getError(error)

        let content = null;
        if (isLoad)
            content = (
                <CourseBigList addedCollections={addedCollectionList} courses={courses} />
            )

        return (
            <SystemDetailCollection title={menuList[1].title} >
                {content}
            </SystemDetailCollection>
        );
    }
}

export default SearchCoursePage;