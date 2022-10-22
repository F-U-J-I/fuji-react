import React, {Component} from 'react';
import cl from './_Catalog.module.scss'
import CollectionBigMini from "../../core/components/collection/big/mini/CollectionBigMini";
import {getCatalog} from "../core/api/collectionAPI";
import {MainPageWrapperContext} from "../core/context/Context";

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
        this.setCatalog()
    }

    static contextType = MainPageWrapperContext;

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.context.addedCollectionList.length !== this.state.addedCollectionList.length) {
            this.setState({
                addedCollectionList: this.context.addedCollectionList
            })
        }
    }

    setCatalog() {
        getCatalog()
            .then((result) => {
                this.setState({
                    collectionList: result.results
                })
            }, () => {
                this.setState({
                    error: true
                })
            })
    }

    render() {
        // console.log(context)
        const {setAddedCollectionList} = this.context
        const {error, collectionList, addedCollectionList} = this.state;
        let collectionListHTML = [];
        if (!error) {
            collectionListHTML = collectionList.map(item => (
                <CollectionBigMini key={item.path}
                                   collection={item}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList} />
            ));
        }

        return (
            <div className={cl.block}>
                {collectionListHTML}
            </div>
        );
    }
}

export default Catalog;