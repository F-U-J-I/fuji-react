import React from 'react';
import cl from './_UserMenuItem.module.scss'
import H5 from "../../../../../../../../../../../core/ui/title/H5/H5";
import {Link} from "react-router-dom";

const UserMenuItem = ({active, title, to, className, ...props}) => {
    return (
        <Link to={to} className={[className, cl.link].join(" ")}>
            <H5 className={active ? cl.active : cl.default} {...props}>{title}</H5>
        </Link>
    );
};

export default UserMenuItem;