import React, {useState} from 'react';
import cl from "./_CollectionDefault.module.scss";
import {getImage} from "../../../../../api/mainAPI";
import {Link} from "react-router-dom";
import H1 from "../../../../../ui/title/H1/H1";
import Author from "../../../../author/Author";
import Rating from "../rating/Rating";
import AddCollection from "../add_collection/AddCollection";
import {addCollection, popCollection} from "../../../../../../main/core/api/collectionAPI";
import {COLLECTION_URL} from "../../../../../service/urls";

function isMyCollection(authorPath) {
    return authorPath === sessionStorage.getItem('path')
}

const CollectionDefault = ({path, title, image_url, author, rating, is_added, count_ratings, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    const linkCollection = `${COLLECTION_URL}/${path}`;
    const _isMyCollection = isMyCollection(author.path)

    const [collectionIsAdded, setCollectionIsAdded] = useState(is_added)

    const getCollection = () => {
        return {
            title: title,
            path: path,
            image_url: image_url
        }
    }

    const _addCollection = () => {
        setAddedCollectionList([getCollection(), ...addedCollectionList])
    }

    const _removeCollection = () => {
        const array = [...addedCollectionList]
        for (let i = 0; i !== array.length; i++) {
            if (array[i].path === path) {
                array.splice(i, 1)
                setAddedCollectionList(array)
                break
            }
        }
    }

    const handleClickAdd = () => {
        if (collectionIsAdded) {
            popCollection(path).then(() => {
                _removeCollection()
                setCollectionIsAdded(false)
            })
        } else {
            addCollection(path).then(() => {
                _addCollection()
                setCollectionIsAdded(true)
            })
        }
    }
    console.log(rating)

    return (
        <div className={cl.collection} {...props}>
            <img src={getImage(image_url)} alt="icon" className={cl.image}/>
            <div className={cl.text}>
                <Link to={linkCollection}>
                    <H1 className={cl.title}>{title}</H1>
                </Link>
                <Author image={author.avatar_url} name={author.username}
                        path={author.path}/>
            </div>
            <div className={cl.info}>
                <Rating rating={rating.toFixed(1)} className={cl.rating} countRatings={count_ratings}/>
                {!_isMyCollection &&
                    <AddCollection className={cl.addCollection}
                                   path={path}
                                   onClick={handleClickAdd}
                                   collectionIsAdded={collectionIsAdded}/>
                }
            </div>
        </div>
    );
};

export default CollectionDefault;