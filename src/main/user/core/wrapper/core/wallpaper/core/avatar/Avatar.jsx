import React from 'react';
import cl from './_Avatar.module.scss'

const Avatar = ({image, className, ...props}) => {
    return <img src={image} alt='avatar' className={[className, cl.image].join(" ")} {...props}/>
};

export default Avatar;