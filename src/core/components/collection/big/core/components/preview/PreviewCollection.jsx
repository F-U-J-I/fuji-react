import React from 'react';
import cl from './_PreviewCollection.module.scss'

const PreviewCollection = ({image, className, ...props}) => {
    return (
        <img src={image} alt="icon" className={cl.image} {...props}/>
    );
};

export default PreviewCollection;