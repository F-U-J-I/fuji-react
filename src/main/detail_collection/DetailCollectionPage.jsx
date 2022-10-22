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
        if (isLoaded) {
            return <CollectionBigDetail collection={collection}
                                        addedCollectionList={addedCollectionList}
                                        setAddedCollectionList={this.context.setAddedCollectionList}/>
        }
    }
}

export default withParams(DetailCollectionPage);
