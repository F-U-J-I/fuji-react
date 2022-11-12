import React from 'react';
import {Link} from "react-router-dom";
import cl from "./_LinkPurple.module.scss"
import Text14M from "../../text/14/medium/Text14M";

const LinkPurple = ({title, className, children, ...props}) => {
    return (
        <Link className={[className, cl.link].join(" ")} {...props}>
            <Text14M className={cl.title}>{title}</Text14M>
            <span>{children}</span>
        </Link>
    );
};

export default LinkPurple;