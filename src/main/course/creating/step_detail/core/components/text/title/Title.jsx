import React from 'react';
import cl from './_Title.module.scss'

const Title = ({title, className, children, ...props}) => {
    return (
        <h1 className={cl.title} {...props}>
            {title !== undefined && title}
            {children}
        </h1>
    );
};

export default Title;