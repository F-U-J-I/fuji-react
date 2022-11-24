import React, {Component} from 'react';
import cl from './_SearchAllPage.module.scss'

import {SearchWrapperPageContext} from "../core/wrapper/core/context/SearchWrapperPageContext";
import {allId, menuList} from "../../../core/service/list";
import {getCourses} from "../../core/api/courseAPI";
import SystemWrapper from "../../../core/components/collection/big/system/core/wrapper/SystemWrapper";
import CourseBigNList from "../../../core/components/course/big/with_navigation/list/CourseBigNList";
import {getError} from "../../../core/service/error";
import {getCollections} from "../../core/api/collectionAPI";
import CollectionMiniLineList from "../../../core/components/collection/mini/line/CollectionMiniLineList";
import UserMiniLineList from "../../../core/components/user/mini/line/UserMiniLineList";
import {getProfiles} from "../../core/api/userAPI";

class SearchAllPage extends Component {
    static contextType = SearchWrapperPageContext;

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            collections: [],
            users: [],
            error: null,
            search: '',
        }
    }

    componentDidMount() {
        this.context.setActiveId(allId)
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.context.search !== this.state.search)
            this._setData()
    }

    _setData() {
        this._setSearch()
        this._getCourses()
        this._getCollections()
        this._getUsers()
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
        const params = {limit: 2, ...this._getParams()}
        getCourses(params).then(
            r => {this.setState({courses: r.results})},
            e => {this.setState({error: e.status})}
        )
    }

    _getCollections() {
        const params = {limit: 5, ...this._getParams()}
        getCollections(params).then(
            r => {this.setState({collections: r.results})},
            e => {this.setState({error: e.status})}
        )
    }

    _getUsers() {
        const params = {limit: 5, ...this._getParams()}
        getProfiles(params).then(
            r => {this.setState({users: r.results})},
            e => {this.setState({error: e.status})}
        )
    }

    render() {
        const {courses, collections, users, error} = this.state;
        const {addedCollectionList} = this.context;
        if (error)
            return getError(error)

        return (
            <div className={cl.content}>
                <SystemWrapper title={menuList[1].title} to={menuList[1].to} className={cl.wrapper}>
                    <CourseBigNList addedCollections={addedCollectionList} courses={courses} className={cl.contentList} />
                </SystemWrapper>

                <SystemWrapper title={menuList[2].title} to={menuList[2].to} className={cl.wrapper}>
                    <CollectionMiniLineList collections={collections} className={cl.contentList} />
                </SystemWrapper>

                <SystemWrapper title={menuList[3].title} to={menuList[3].to} className={cl.wrapper}>
                    <UserMiniLineList users={users} className={cl.contentList} />
                </SystemWrapper>
            </div>
        );
    }
}

export default SearchAllPage;