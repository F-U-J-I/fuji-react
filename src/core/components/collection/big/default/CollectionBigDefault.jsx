import React from 'react';
import cl from './_CollectionBigDefault.module.scss'
import CourseMini from "../../../course/mini/CourseMini";
import CollectionHeadDefault from "../../core/components/collection_head/default/CollectionHeadDefault";

const CollectionBigDefault = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    return (
        <div className={cl.block} {...props}>
            <CollectionHeadDefault collection={collection}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList}/>
            <div className={cl.courses}>
                {collection.courses.map(item =>
                    <CourseMini key={item.path} course={item}/>
                )}
            </div>
        </div>
    );
};

export default CollectionBigDefault;