import React, {Component} from 'react';
import {getCollection} from "../core/api/collectionAPI";
import {MainPageWrapperContext} from "../core/context/Context";
import BigDetailCollection from "../../core/components/collection/big/detail/BigDetailCollection";
import {withParams} from "../../core/service/params";


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
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     this.setCollection(nextProps.params.path)
    // }

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
