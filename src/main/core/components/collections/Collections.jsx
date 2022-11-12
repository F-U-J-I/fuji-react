import React, {Component} from 'react';
import {filterStateModalList, sortStateModalList} from "../../../../core/service/list";
import {getError} from "../../../../core/service/error";
import cl from "./_Collections.module.scss";
import SearchFS from "../search-filter-sort/SearchFS";
import CollectionMiniList from "../../../../core/components/collection/mini/list/CollectionMiniList";
import {getAddedCollection, getCollectionProfile, getCreatedCollection} from "../../api/collectionAPI";

class Collections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: [],
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
            this._setCollections()
        }
    }

    _setData = () => {
        this._setCollections()
        this.setState({isLoad: true})
    }

    _getCollectionWithFilter = () => {
        if (this.state.filter.id === filterStateModalList[1].id)
            return getAddedCollection
        else if (this.state.filter.id === filterStateModalList[2].id)
            return getCreatedCollection
        return getCollectionProfile
    }

    _getSorterParams = () => {
        if (this.state.sorter.id === sortStateModalList[0].id)
            return {ordering: '-date_added'}
        else if (this.state.sorter.id === sortStateModalList[1].id)
            return {ordering: '-collection__rating'}
        else if (this.state.sorter.id === sortStateModalList[2].id)
            return {ordering: '-collection__title'}
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

    _setCollections = () => {
        const params = this._getParams()
        this._getCollectionWithFilter()(this.props.path, params).then(
            r => {this.setState({collections: r.results})},
            e => {this.setState({error: e.status})},
        )
    }

    render() {
        const {collections, filter, sorter, search, error, isLoad} = this.state;
        const {...props} = this.props;
        if (error)
            return getError(error)

        let collectionsHTML = null
        if (isLoad)
            collectionsHTML = (<CollectionMiniList collections={collections} className={cl.collections} />)

        return (
            <div {...props}>
                <SearchFS setFilter={this._setFilter} filter={filter}
                          setSorter={this._setSorter} sorter={sorter}
                          setSearch={this._setSearch} search={search}
                          placeHolder='Поиск подборок'/>
                {collectionsHTML}
            </div>
        );
    }
}

export default Collections;