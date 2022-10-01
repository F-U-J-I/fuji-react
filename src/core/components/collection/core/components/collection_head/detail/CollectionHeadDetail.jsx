import React from 'react';
import clCommon from "../_CollectionHead.module.scss";
import cl from "./_CollectionHeadDetail.module.scss";
import CollectionDefault from "../../default/CollectionDefault";

const CollectionHeadDetail = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    return (
        <div className={[clCommon.collectionHead, className].join(" ")} {...props}>
            <CollectionDefault collection={collection}
                               addedCollectionList={addedCollectionList}
                               setAddedCollectionList={setAddedCollectionList}/>
        </div>
    );
};

export default CollectionHeadDetail;