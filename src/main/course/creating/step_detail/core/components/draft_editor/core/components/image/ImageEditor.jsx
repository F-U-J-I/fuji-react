import React from 'react';
import cl from './_ImageEditor.module.scss'

const ImageEditor = ({src, alt, className, ...props}) => {
    const altLocal = alt || 'img'
    return (
        <img src={src} alt={altLocal}
             contentEditable={false}
             className={[cl.image, className].join(" ")}
             {...props}/>
    );
};

export default ImageEditor;