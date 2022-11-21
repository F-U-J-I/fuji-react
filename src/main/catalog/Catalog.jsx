import React, {Component} from 'react';
import cl from './_Catalog.module.scss'
import {getCatalog} from "../core/api/collectionAPI";
import {MainPageWrapperContext} from "../core/context/Context";
import {catalogId} from "../core/wrapper/main_page_wrapper/core/service/activeIdService";
import CollectionBigList from "../../core/components/collection/big/list/CollectionBigList";

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            collectionList: [],
            addedCollectionList: []
        }
    }

    componentDidMount() {
        this._setData()
    }

    static contextType = MainPageWrapperContext;

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.context.addedCollectionList.length !== this.state.addedCollectionList.length) {
            this.setState({
                addedCollectionList: this.context.addedCollectionList
            })
        }
    }

    _setData() {
        this.context.setActiveId(catalogId)
        this.setCatalog()
    }

    setCatalog() {
        getCatalog().then(
            r => {this.setState({collectionList: r.results})},
            e => {this.setState({error: e.status})})
    }

    render() {
        const {setAddedCollectionList} = this.context
        const {error, collectionList, addedCollectionList} = this.state;
        let collectionListHTML = [];
        if (!error) {
            collectionListHTML = (
                <CollectionBigList collectionList={collectionList}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList}/>
            )
        }

        return (
            <div className={cl.block}>
                {collectionListHTML}
            </div>
        );
    }
}

export default Catalog;