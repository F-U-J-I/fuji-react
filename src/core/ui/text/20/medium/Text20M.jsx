import React from 'react';
import cl from './_Text20M.module.scss'
import clCommon from '../_Text20.module.scss'

const Text20M = ({className, children, ...props}) => {
    return (
        <p className={[className, cl.text, clCommon.text].join(" ")} {...props}>{children}</p>
    );
};

export default Text20M;