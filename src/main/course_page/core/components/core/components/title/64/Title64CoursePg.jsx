import React from 'react';
import cl from './_Title64CoursePg.module.scss'

const Title64CoursePg = ({title, className, ...props}) => {
    return (
        <h1 className={[cl.title, className].join(" ")} {...props}>
            {title}
        </h1>
    );
};

export default Title64CoursePg;