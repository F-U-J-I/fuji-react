import React from 'react';
import cl from "./_LinkGray.module.scss";
import H4 from "../../title/H4/H4";
import {Link} from "react-router-dom";

const LinkGray = ({to, title, className, children, ...props}) => {
    return (
        <Link to={to} className={[cl.link, className].join(" ")} {...props}>
            <H4 className={cl.linkTitle}>{title}</H4>
            {children}
        </Link>
    );
};

export default LinkGray;