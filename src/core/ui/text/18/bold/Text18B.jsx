import React from 'react';
import cl from './_Text18B.module.scss'
import clCommon from '../_Text18.module.scss'

const Text18B = ({className, children, ...props}) => {
    return (
        <p className={[className, cl.text, clCommon.text].join(" ")} {...props}>{children}</p>
    );
};

export default Text18B;