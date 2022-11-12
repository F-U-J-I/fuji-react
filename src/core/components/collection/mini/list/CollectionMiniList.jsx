import React from 'react';
import EmptyList from "../../../empty/EmptyList";
import cl from "./_CollectionMiniList.module.scss";
import CollectionMini from "../item/CollectionMini";

const CollectionMiniList = ({collections, className, ...props}) => {
    if (!collections) {
        return <EmptyList className={className} {...props} />
    }
    return (
        <div className={[cl.collections, className].join(" ")} {...props}>
            {collections.map(item =>
                <CollectionMini key={item.path} collection={item}/>
            )}
        </div>
    );
};

export default CollectionMiniList;