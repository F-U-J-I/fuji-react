import React from 'react';
import cl from "./_LinkGray.module.scss";
import H6 from "../../title/H6/H6";
import {Link} from "react-router-dom";

const LinkGray = ({to, title, className, children, ...props}) => {
    return (
        <Link to={to} className={[cl.link, className].join(" ")} {...props}>
            <H6 className={cl.linkTitle}>{title}</H6>
            {children}
        </Link>
    );
};

export default LinkGray;