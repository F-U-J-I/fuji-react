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

function isMyCollection(collection) {
    return collection.author.path === sessionStorage.getItem('path')
}

const CollectionDefault = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    const ratingUpdate = collection.rating.toFixed(1)
    const linkCollection = `${COLLECTION_URL}/${collection.path}`;
    const _isMyCollection = isMyCollection(collection)

    const [collectionIsAdded, setCollectionIsAdded] = useState(collection.is_added)

    const getCollection = () => {
        return {
            title: collection.title,
            path: collection.path,
            image_url: collection.image_url
        }
    }

    const _addCollection = () => {
        setAddedCollectionList([getCollection(), ...addedCollectionList])
    }

    const _removeCollection = () => {
        const array = [...addedCollectionList]
        for (let i = 0; i !== array.length; i++) {
            if (array[i].path === collection.path) {
                array.splice(i, 1)
                setAddedCollectionList(array)
                break
            }
        }
    }

    const handleClickAdd = () => {
        if (collectionIsAdded) {
            popCollection(collection.path).then(() => {
                _removeCollection()
                setCollectionIsAdded(false)
            })
        } else {
            addCollection(collection.path).then(() => {
                _addCollection()
                setCollectionIsAdded(true)
            })
        }
    }

    return (
        <div className={cl.collection} {...props}>
            <img src={getImage(collection.image_url)} alt="icon" className={cl.image}/>
            <div className={cl.text}>
                <Link to={linkCollection}>
                    <H1 className={cl.title}>{collection.title}</H1>
                </Link>
                <Author image={collection.author.avatar_url} name={collection.author.username}
                        path={collection.author.path}/>
            </div>
            <div className={cl.info}>
                <Rating rating={ratingUpdate} className={cl.rating}/>
                {!_isMyCollection &&
                    <AddCollection className={cl.addCollection}
                                   path={collection.path}
                                   onClick={handleClickAdd}
                                   collectionIsAdded={collectionIsAdded}/>
                }
            </div>
        </div>
    );
};

export default CollectionDefault;