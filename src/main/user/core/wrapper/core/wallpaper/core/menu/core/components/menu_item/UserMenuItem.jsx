import React from 'react';
import cl from './_UserMenuItem.module.scss'
import H4 from "../../../../../../../../../../../core/ui/title/H4/H4";
import {Link} from "react-router-dom";

const UserMenuItem = ({active, title, to, className, ...props}) => {
    return (
        <Link to={to} className={[className, cl.link].join(" ")}>
            <H4 className={active ? cl.active : cl.default} {...props}>{title}</H4>
        </Link>
    );
};

export default UserMenuItem;