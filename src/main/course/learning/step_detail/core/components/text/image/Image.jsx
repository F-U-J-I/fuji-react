import React from 'react';
import cl from './_Image.module.scss'

const Image = ({src, className, ...props}) => {
    return(
        <div contentEditable={false}>
            <img src={src} alt='fuji-img' className={[cl.image, className].join(" ")} {...props} />
        </div>
    )
};

export default Image;