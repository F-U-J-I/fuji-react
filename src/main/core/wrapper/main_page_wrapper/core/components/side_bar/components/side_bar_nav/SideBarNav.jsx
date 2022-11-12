import React from 'react';
import cl from './_SideBarNav.module.scss'
import {Link} from "react-router-dom";

const SideBarNav = ({imageDefault, imageActive, alt, title, to, active, className, ...props}) => {
    let localAlt = 'icon'
    if (alt) {
        localAlt = alt
    }

    return (
        <Link to={to} className={[cl.link, active ? cl.active : '', className].join(" ")} {...props}>
            <img className={cl.image} src={imageDefault} alt={localAlt}/>
            <img className={[cl.image, cl.imageActive].join(' ')} src={imageActive} alt={localAlt}/>
            <span className={cl.title}>{title}</span>
        </Link>
    );
};

export default SideBarNav;