import React from 'react';
import logo from '../../../static/img/logo-mini.svg'
import cl from './_LogoMin.module.scss'
import {Link} from "react-router-dom";

const LogoMin = ({classNameImage, ...props}) => {
    return (
        <Link to='/' {...props}>
            <img src={logo} alt="logo" className={[classNameImage, cl.logo].join(" ")}/>
        </Link>
    );
};

export default LogoMin;