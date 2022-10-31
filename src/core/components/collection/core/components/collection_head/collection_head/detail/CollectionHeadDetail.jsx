import React, {Component} from 'react';

import clCommon from "../_CollectionHead.module.scss";
import cl from "./_CollectionHeadDetail.module.scss";

import editSVG from "../../../../../../../static/img/edit-fill-white.svg";

import CollectionDefault from "../../default/CollectionDefault";
import MakeRating from "../../make_rating/MakeRating";
import CollectionTracking from "../../tracking/CollectionTracking";
import ButtonOval from "../../../../../../../ui/button/oval/ButtonOval";
import {isMyCollection} from "../../../../../../../service/collection";
import ButtonDeleteCollection from "../../delete_collection/ButtonDeleteCollection";


class CollectionHeadDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: props.collection,
            rating: props.collection.rating,
            membersAmount: props.collection.members_amount,
            isAdded: props.collection.is_added,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.collection.path !== this.state.collection.path) {
            this.setState({
                collection: this.props.collection,
                rating: this.props.collection.rating,
                membersAmount: this.props.collection.members_amount,
                isAdded: this.props.collection.is_added,
            })
        }
    }

    _setRating = (newRating) => {
        this.setState({rating: newRating})
    }

    _onClickDelete = () => {
        const array = [...this.props.addedCollectionList]
        for (let i = 0; i !== array.length; i++) {
            if (array[i].path === this.props.collection.path) {
                array.splice(i, 1)
                this.props.setAddedCollectionList(array)
                break
            }
        }
    }

    render() {
        const {addedCollectionList, setAddedCollectionList, className, ...props} = this.props;
        const {collection, rating} = this.state;
        const _isMyCollection = isMyCollection(collection.author.path)
        return (
            <div className={[clCommon.collectionHead, className].join(" ")} {...props}>
                <CollectionDefault path={collection.path}
                                   title={collection.title}
                                   image_url={collection.image_url}
                                   author={collection.author}
                                   rating={rating}
                                   countRatings={collection.count_ratings}
                                   isAdded={collection.is_added}
                                   membersAmount={collection.members_amount}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList}/>

                <div className={cl.options}>
                    {_isMyCollection ? (
                        <>
                            <ButtonOval image={editSVG} className={cl.edit}/>
                            <ButtonDeleteCollection onClickDelete={this._onClickDelete} path={collection.path} className={cl.delete} />
                        </>
                    ) : (
                        <div className={cl.rating}>
                            <CollectionTracking membersAmount={collection.members_amount}/>
                            <MakeRating className={cl.ratingButton} path={collection.path} grade={collection.grade}
                                        rating={rating} setRating={this._setRating}/>
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default CollectionHeadDetail;