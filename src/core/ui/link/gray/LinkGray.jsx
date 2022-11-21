import React from 'react';
import cl from "./_LinkGray.module.scss";
import H5 from "../../title/H5/H5";
import {Link} from "react-router-dom";

const LinkGray = ({to, title, className, children, ...props}) => {
    return (
        <Link to={to} className={[cl.link, className].join(" ")} {...props}>
            <H5 className={cl.linkTitle}>{title}</H5>
            {children}
        </Link>
    );
};

export default LinkGray;