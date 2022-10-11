import React from 'react';
import clCommon from "../_CollectionHead.module.scss";
import cl from "./_CollectionHeadDefault.module.scss";
import CollectionDefault from "../../default/CollectionDefault";
import LinkGray from "../../../../../../ui/link/gray/LinkGray";
import {COLLECTION_URL} from "../../../../../../service/urls";

const CollectionHeadDefault = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    const linkCollection = `${COLLECTION_URL}/${collection.path}`;
    return (
        <div className={[clCommon.collectionHead, className].join(" ")} {...props}>
            <CollectionDefault path={collection.path}
                               title={collection.title}
                               image_url={collection.image_url}
                               author={collection.author}
                               rating={collection.rating}
                               is_added={collection.is_added}
                               count_ratings={collection.count_ratings}
                               addedCollectionList={addedCollectionList}
                               setAddedCollectionList={setAddedCollectionList}/>
            <LinkGray to={linkCollection} className={cl.link} title='Открыть всё'/>
        </div>
    );
};

export default CollectionHeadDefault;