import React, {Component} from 'react';
import {getCollection} from "../core/api/collectionAPI";
import {MainPageWrapperContext} from "../core/context/Context";
import BigDetailCollection from "../../core/components/collection/big/detail/BigDetailCollection";
import {withParams} from "../../core/service/params";
import {TOP_MENU_DEFAULT} from "../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";


class DetailCollectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            collection: null,
            addedCollectionList: []
        }
    }

    componentDidMount() {
        this.setCollection(this.props.params.path)
        this.context.setMin(false)
        this.context.setTopMenu(TOP_MENU_DEFAULT)
    }

    static contextType = MainPageWrapperContext;

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.path !== this.props.params.path) {
            this.setCollection(this.props.params.path)
        }
        if (this.context.addedCollectionList.length !== this.state.addedCollectionList.length) {
            this.setState({
                addedCollectionList: this.context.addedCollectionList
            })
        }
    }

    setCollection(path) {
        getCollection(path)
            .then((result) => {
                this.setState({
                    collection: result,
                    isLoaded: true
                })
            }, () => {
                this.setState({
                    error: true,
                    isLoaded: true
                })
            })
    }

    render() {
        const {isLoaded, collection, addedCollectionList} = this.state;
        const {setAddedCollectionList} = this.context;
        if (isLoaded) {
            return <BigDetailCollection collection={collection}
                                        addedCollectionList={addedCollectionList}
                                        setAddedCollectionList={setAddedCollectionList}/>
        }
    }
}

export default withParams(DetailCollectionPage);
