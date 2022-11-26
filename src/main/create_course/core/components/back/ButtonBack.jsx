import React from 'react';
import backWhiteSVG from '../../../../../core/static/img/arrow-left-fill-white.svg'
import backPurpleSVG from '../../../../../core/static/img/arrow-left-fill-purple.svg'
import cl from './_ButtonBack.module.scss'
import {Link} from "react-router-dom";
import H6 from "../../../../../core/ui/title/H6/H6";

const ButtonBack = ({title, to, className, ...props}) => {
    return (
        <div className={cl.block}>
            <Link to={to} className={[cl.back, className].join(" ")} {...props}>
                <img src={backWhiteSVG} alt='back' className={[cl.image, cl.imageWhite].join(" ")}/>
                <img src={backPurpleSVG} alt='back' className={[cl.image, cl.imagePurple].join(" ")}/>
                <H6 className={cl.title}>{title}</H6>
            </Link>
        </div>
    );
};

export default ButtonBack;