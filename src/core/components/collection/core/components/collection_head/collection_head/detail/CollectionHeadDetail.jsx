import React, {Component} from 'react';

import clCommon from "../_CollectionHead.module.scss";
import cl from "./_CollectionHeadDetail.module.scss";

import CollectionDefault from "../../default/CollectionDefault";
import MakeRating from "../../make_rating/MakeRating";
import CollectionTracking from "../../tracking/CollectionTracking";
import {isMyCollection} from "../../../../../../../service/collection";
import ButtonDeleteCollection from "../../delete_collection/ButtonDeleteCollection";
import ButtonEditCollection from "../../edit_collection/ButtonEditCollection";
import {updateCollection} from "../../../../../../../../main/core/api/collectionAPI";


class CollectionHeadDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: props.collection,
            wallpaper: props.wallpaper,
            title: props.collection.title,
            rating: props.collection.rating,
            preview: props.collection.image_url,
            grade: props.collection.grade,
            membersAmount: props.collection.members_amount,
            countRatings: props.collection.count_ratings,
            isAdded: props.collection.is_added,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.collection.path !== this.state.collection.path) {
            this.setState({
                wallpaper: this.props.wallpaper,
                collection: this.props.collection,
                title: this.props.collection.title,
                rating: this.props.collection.rating,
                preview: this.props.collection.image_url,
                grade: this.props.collection.grade,
                membersAmount: this.props.collection.members_amount,
                countRatings: this.props.collection.count_ratings,
                isAdded: this.props.collection.is_added,
            })
        }
    }

    _setTitle = (newTitle) => {
        this.setState({title: newTitle})
    }

    _setRating = (newRating) => {
        this.setState({rating: newRating})
    }

    _setGrade = (newGrade) => {
        this.setState({grade: newGrade})
    }

    _setPreview = (newPreview) => {
        this.setState({preview: newPreview})
    }

    _setMembersAmount = (newMembersAmount) => {
        this.setState({membersAmount: newMembersAmount})
    }

    _setIsAdded = (bool) => {
        this.setState({isAdded: bool})
    }

    _setCountRatings = (newCountRatings) => {
        this.setState({countRatings: newCountRatings})
    }

    _getIndexAddedCollectionList = () => {
        for (let i = 0; i !== this.props.addedCollectionList.length; i++)
            if (this.props.addedCollectionList[i].path === this.props.collection.path)
                return i
        return -1
    }

    _updateCollection = (title, description, image_url) => {
        const array = [...this.props.addedCollectionList]
        const index = this._getIndexAddedCollectionList()
        if (index !== -1) {
            // array.splice(index, 1)
            array[index].title = title
            array[index].description = description
            array[index].image_url = image_url
            this.props.setAddedCollectionList(array)
        }
    }

    _onClickUpdate = async (title, description, wallpaper, image_url) => {
        const body = new FormData()
        body.append('title', title)
        body.append('description', description)
        if (wallpaper)
            body.append('wallpaper', wallpaper, wallpaper.name)
        if (image_url)
            body.append('image_url', image_url, image_url.name)

        updateCollection(this.props.collection.path, body).then(
            r => {
                this._setTitle(title)
                this.props.setDescription(description)
                this.props.setWallpaper(r.wallpaper)
                this._updateCollection(title, description, r.image_url)
                this._setPreview(r.image_url)

                this.setState({
                    wallpaper: r.wallpaper,
                    image_url: r.image_url,
                })

                return true
            },
            e => {
                console.log(e)
                return false
            }
        )
    }

    _onClickDelete = () => {
        const array = [...this.props.addedCollectionList]
        const index = this._getIndexAddedCollectionList()
        if (index !== -1) {
            array.splice(index, 1)
            this.props.setAddedCollectionList(array)
        }
    }

    render() {
        const {description, setDescription, setWallpaper, addedCollectionList, setAddedCollectionList, className, ...props} = this.props;
        const {collection, title, rating, preview, wallpaper, countRatings, grade, membersAmount, isAdded} = this.state;
        const _isMyCollection = isMyCollection(collection.author.path)
        return (
            <div className={[clCommon.collectionHead, className].join(" ")} {...props}>
                <CollectionDefault path={collection.path}
                                   title={title}
                                   isTitleText={true}
                                   image_url={preview}
                                   author={collection.author}
                                   rating={rating}
                                   countRatings={countRatings}
                                   isAdded={isAdded}
                                   setIsAdded={this._setIsAdded}
                                   membersAmount={membersAmount}
                                   setMembersAmount={this._setMembersAmount}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList}/>

                <div className={cl.options}>
                    {_isMyCollection ? (
                        <>
                            <ButtonEditCollection className={cl.edit}
                                                  title={title}
                                                  description={description}
                                                  image_url={preview}
                                                  wallpaper={wallpaper}
                                                  onClickSubmit={this._onClickUpdate}
                                                  path={collection.path}/>
                            <ButtonDeleteCollection onClickDelete={this._onClickDelete} path={collection.path}
                                                    className={cl.delete}/>
                        </>
                    ) : (
                        <div className={cl.rating}>
                            <CollectionTracking membersAmount={membersAmount}/>
                            <MakeRating className={cl.ratingButton} path={collection.path} grade={grade} setGrade={this._setGrade}
                                        rating={rating} setRating={this._setRating} countRatings={countRatings}
                                        setCountRatings={this._setCountRatings}/>
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default CollectionHeadDetail;