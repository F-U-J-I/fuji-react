import React from 'react';
import cl from './_UserMenuItem.module.scss'
import H6 from "../../../../../../../../../../../core/ui/title/H6/H6";
import {Link} from "react-router-dom";

const UserMenuItem = ({active, title, to, className, ...props}) => {
    return (
        <Link to={to} className={[className, cl.link].join(" ")}>
            <H6 className={active ? cl.active : cl.default} {...props}>{title}</H6>
        </Link>
    );
};

export default UserMenuItem;