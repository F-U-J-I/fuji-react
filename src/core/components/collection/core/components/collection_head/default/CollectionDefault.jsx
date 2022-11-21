import React, {useState} from 'react';
import cl from "./_CollectionDefault.module.scss";
import {getImage} from "../../../../../../api/mainAPI";
import Author from "../../../../../user/author/Author";
import Rating from "../rating/Rating";
import AddCollection from "../add_collection/AddCollection";
import {addCollection, popCollection} from "../../../../../../../main/core/api/collectionAPI";
import {COLLECTION_URL} from "../../../../../../service/urls";
import {isMyCollection} from "../../../../../../service/collection";
import PreviewCollection from "../../../../big/core/components/preview/PreviewCollection";
import TitleTextCollection from "../../../../big/core/components/title/TitleTextCollection";


const CollectionDefault = ({path, author, image_url, title, isTitleText, rating, countRatings,
                               isAdded, setAddedCollectionList, addedCollectionList, setMembersAmount,
                               membersAmount, ...props}) => {

    const [isAddedLocal, setIsAddedLocal] = useState(isAdded)
    const _getCollection = () => {
        return {
            title: title,
            path: path,
            image_url: image_url,
        }
    }

    const _addCollection = () => {
        setAddedCollectionList([_getCollection(), ...addedCollectionList])
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

    const _handleClickAdd = () => {
        if (isAddedLocal) {
            popCollection(path).then(() => {
                _removeCollection()
                setIsAddedLocal(false)
                if (setMembersAmount)
                    setMembersAmount(membersAmount - 1)
            })
        } else {
            addCollection(path).then(() => {
                _addCollection()
                setIsAddedLocal(true)
                if (setMembersAmount)
                    setMembersAmount(membersAmount + 1)
            })
        }
    }

    const linkCollection = `${COLLECTION_URL}/${path}`;
    const _isMyCollection = isMyCollection(author.path)

    return (
        <div className={cl.collection} {...props}>
            <PreviewCollection image={getImage(image_url)}/>
            <div className={cl.info}>
                <div className={[cl.top].join(" ")}>
                    <TitleTextCollection title={title} to={linkCollection} className={cl.infoItem}
                                         isTitleText={isTitleText}/>
                    <Rating rating={rating.toFixed(1)} className={cl.infoItem} countRatings={countRatings}/>
                    {!_isMyCollection &&
                        <AddCollection className={cl.infoItem}
                                       path={path}
                                       onClick={_handleClickAdd}
                                       isAdded={isAddedLocal}/>
                    }
                </div>
                <Author image={author.avatar_url} name={author.username} path={author.path}/>
            </div>
        </div>
    );
};

export default CollectionDefault;