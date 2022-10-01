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
            <CollectionDefault collection={collection}
                               addedCollectionList={addedCollectionList}
                               setAddedCollectionList={setAddedCollectionList}/>
            <LinkGray to={linkCollection} className={cl.link} title='Открыть всё'/>
        </div>
    );
};

export default CollectionHeadDefault;