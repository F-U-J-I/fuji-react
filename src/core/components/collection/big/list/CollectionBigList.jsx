import React from 'react';
import BigMiniCollection from "../mini/BigMiniCollection";
import EmptyList from "../../../empty/EmptyList";

const CollectionBigList = ({
                               titleError, descriptionError,
                               collectionList, addedCollectionList, setAddedCollectionList,
                               className, ...props
                           }) => {
    if (collectionList === undefined || collectionList == null || collectionList.length === 0) {
        return <EmptyList title={titleError} description={descriptionError} className={className} {...props} />
    }

    return (
        <div className={className} {...props}>
            {collectionList.map(item => (
                <BigMiniCollection key={item.path}
                                   collection={item}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList}/>
            ))}
        </div>
    );
};

export default CollectionBigList;