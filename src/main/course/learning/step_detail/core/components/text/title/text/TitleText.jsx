import React from 'react';
import clCore from '../core/scss/_Title.module.scss'

const TitleText = ({title, className, children, ...props}) => {
    return (
        <h1 className={clCore.title} {...props}>
            {title !== undefined && title}
            {children}
        </h1>
    );
};

export default TitleText;