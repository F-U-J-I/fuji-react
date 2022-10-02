import React from 'react';
import cl from './_CollectionBigDefault.module.scss'
import CollectionHeadDefault from "../../core/components/collection_head/default/CollectionHeadDefault";
import CourseMiniList from "../../../course/mini/list/CourseMiniList";

const CollectionBigDefault = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    return (
        <div className={cl.block} {...props}>
            <CollectionHeadDefault collection={collection}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList}/>
            <CourseMiniList className={cl.courses} courses={collection.courses}/>
        </div>
    );
};

export default CollectionBigDefault;