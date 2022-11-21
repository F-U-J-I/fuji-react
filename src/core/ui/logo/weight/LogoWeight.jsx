import React from 'react';
import logo from '../../../static/img/logo.svg'
import cl from './_LogoWeight.module.scss'
import {Link} from "react-router-dom";

const LogoWeight = ({classNameImage, ...props}) => {
    return (
        <Link to='/' {...props}>
            <img src={logo} alt="logo" className={[classNameImage, cl.logo].join(" ")}/>
        </Link>
    );
};

export default LogoWeight;