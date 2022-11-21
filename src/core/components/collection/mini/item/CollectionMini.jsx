import React from 'react';
import cl from './_CollectionMini.module.scss'
import H5 from "../../../../ui/title/H5/H5";
import StatusCollection from "../status/StatusCollection";
import Text14M from "../../../../ui/text/14/medium/Text14M";
import {Link} from "react-router-dom";
import {getImage} from "../../../../api/mainAPI";
import RatingCollectionMini from "./core/components/rating/RatingCollectionMini";

const CollectionMini = ({collection, className, ...props}) => {
    const to = `/collections/${collection.path}`
    const preview = getImage(collection.image_url)
    return (
        <Link to={to} className={[className, cl.collection].join(" ")} {...props}>
            <img className={cl.preview} src={preview} alt='preview' />
            <div className={cl.text}>
                <H5 className={cl.title}>{collection.title}</H5>
                <StatusCollection className={cl.status} />
                <Text14M className={cl.author}>Создал: {collection.author.username}</Text14M>
            </div>
            <RatingCollectionMini rating={collection.rating} className={cl.rating} />
        </Link>
    );
};

export default CollectionMini;