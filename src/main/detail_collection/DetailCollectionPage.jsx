import React, {Component} from 'react';
import {useParams} from "react-router";
import {getCollection} from "../core/api/collectionAPI";
import {MainPageWrapperContext} from "../core/context/Context";
import CollectionBigDetail from "../../core/components/collection/big/detail/CollectionBigDetail";

function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>
}

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
        const {path} = this.props.params;
        this.setCollection(path)
    }

    static contextType = MainPageWrapperContext;

    componentDidUpdate(prevProps, prevState, snapshot) {
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
        const {isLoaded, collection} = this.state;

        // let collectionHTML = null
        if (isLoaded)
            return <CollectionBigDetail collection={collection} />

        // return (
        //     {collectionHTML}
        // );
    }
}

export default withParams(DetailCollectionPage);