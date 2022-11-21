import React, {Component} from 'react';
import {SearchWrapperPageContext} from "../core/wrapper/core/context/SearchWrapperPageContext";
import {menuList, userId} from "../../../core/service/list";
import {getError} from "../../../core/service/error";
import SystemDetailCollection from "../../../core/components/collection/big/system/detail/SystemDetailCollection";
import {getProfiles} from "../../core/api/userAPI";
import UserMiniList from "../../../core/components/user/mini/list/UserMiniList";

class SearchUserPage extends Component {
    static contextType = SearchWrapperPageContext;

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: '',
            isLoad: false,
            error: null,
        }
    }

    componentDidMount() {
        this.context.setActiveId(userId)
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.context.search !== this.state.search)
            this._setData()
    }

    _setData() {
        this._setSearch()
        this._getUsers()
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

    _getUsers() {
        const params = {limit: 20, ...this._getParams()}
        getProfiles(params).then(
            r => {this.setState({users: r.results})},
            e => {this.setState({error: e.status})}
        )
    }

    render() {
        const {users, isLoad, error} = this.state;
        if (error)
            return getError(error)

        let content = null;
        if (isLoad)
            content = (
                <UserMiniList users={users}/>
            )

        return (
            <SystemDetailCollection title={menuList[3].title} >
                {content}
            </SystemDetailCollection>
        );
    }
}

export default SearchUserPage;