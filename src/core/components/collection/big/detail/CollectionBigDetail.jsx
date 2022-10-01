import React from 'react';
import cl from "./_CollectionBigDetail.module.scss";
import {getImage} from "../../../../api/mainAPI";
import CourseMini from "../../../course/mini/CourseMini";
import CollectionHeadDetail from "../../core/components/collection_head/detail/CollectionHeadDetail";

const CollectionBigDetail = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            {collection.wallpaper !== null &&
                <img className={cl.wallpaper} src={getImage(collection.wallpaper)} alt="wallpaper"/>
            }
            <CollectionHeadDetail collection={collection}
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

export default CollectionBigDetail;