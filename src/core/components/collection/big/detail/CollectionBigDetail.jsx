import React from 'react';
import cl from "./_CollectionBigDetail.module.scss";
import {getImage} from "../../../../api/mainAPI";
import CollectionHeadDetail from "../../core/components/collection_head/detail/CollectionHeadDetail";
import CourseMiniList from "../../../course/mini/list/CourseMiniList";
import CollectionDescription from "../../core/components/description/CollectionDescription";

const CollectionBigDetail = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            {collection.wallpaper !== null &&
                <img className={cl.wallpaper} src={getImage(collection.wallpaper)} alt="wallpaper"/>
            }
            <div className={cl.wrapper}>
                {collection.description &&
                    <CollectionDescription description={collection.description} />
                }
                <CollectionHeadDetail className={cl.collectionHead}
                                      collection={collection}
                                      addedCollectionList={addedCollectionList}
                                      setAddedCollectionList={setAddedCollectionList}/>
                <CourseMiniList className={cl.courses} courses={collection.courses}/>
            </div>
        </div>
    );
};

export default CollectionBigDetail;