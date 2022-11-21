import React, {Component} from 'react';
import {SearchWrapperPageContext} from "../core/wrapper/core/context/SearchWrapperPageContext";
import {collectionId, menuList} from "../../../core/service/list";
import {getError} from "../../../core/service/error";
import SystemDetailCollection from "../../../core/components/collection/big/system/detail/SystemDetailCollection";
import {getCollections} from "../../core/api/collectionAPI";
import CollectionBigList from "../../../core/components/collection/big/list/CollectionBigList";

class SearchCollectionPage extends Component {
    static contextType = SearchWrapperPageContext;

    constructor(props) {
        super(props);
        this.state = {
            collections: [],
            search: '',
            isLoad: false,
            error: null,
        }
    }

    componentDidMount() {
        this.context.setActiveId(collectionId)
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.context.search !== this.state.search)
            this._setData()
    }

    _setData() {
        this._setSearch()
        this._getCollections()
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

    _getCollections() {
        const params = {limit: 10, ...this._getParams()}
        getCollections(params).then(
            r => {this.setState({collections: r.results})},
            e => {this.setState({error: e.status})}
        )
    }

    render() {
        const {collections, isLoad, error} = this.state;
        const {addedCollectionList, setAddedCollectionList} = this.context;
        if (error)
            return getError(error)

        let content = null;
        if (isLoad)
            content = (
                <CollectionBigList collectionList={collections}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList} />
            )

        return (
            <SystemDetailCollection title={menuList[2].title} >
                {content}
            </SystemDetailCollection>
        );
    }
}

export default SearchCollectionPage;