import React from 'react';
import cl from './_LinkEditor.module.scss'

const LinkEditor = ({url, children, className, ...props}) => {
    return (
        <a href={url} title={url} {...props} className={[cl.link, "link"].join(" ")}>
            {children}
        </a>
    );
};

export default LinkEditor;