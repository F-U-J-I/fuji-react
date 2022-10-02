import React from 'react';
import clDefault from '../_Text16.module.scss'
import clMI from './_Text16MI.module.scss'

const Text16Mi = ({className, children, ...props}) => {
    return (
        <span className={[clDefault.text, clMI.text, className].join(" ")} {...props}>{children}</span>
    );
};

export default Text16Mi;