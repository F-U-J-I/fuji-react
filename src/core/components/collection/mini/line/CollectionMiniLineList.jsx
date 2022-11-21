import React from 'react';
import cl from './_CollectionMiniLineList.module.scss'
import CollectionMiniList from "../list/CollectionMiniList";

const CollectionMiniLineList = ({className, ...props}) => {
    return <CollectionMiniList className={[cl.collections, className].join(" ")} {...props}/>
};

export default CollectionMiniLineList;