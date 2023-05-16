import React, {useState} from 'react';
import clCommon from '../../scss/_Card.module.scss'
import clCore from '../core/scss/_CardItem.module.scss'
import cl from './_CardDefaultItem.module.scss'
import {Link} from "react-router-dom";
import H6 from "../../../../../../../../../../core/ui/title/H6/H6";
import Text14M from "../../../../../../../../../../core/ui/text/14/medium/Text14M";
import completeSVG from '../../../../../../../../../../core/static/img/check-mark-fill-green.svg'

const CardDefaultItem = ({to, image, title, description, className, ...props}) => {
    return (
        <div className={clCore.block}>
            <Link to={to} className={[clCore.card, clCommon.card, className].join(" ")} {...props}>
                <img src={image} alt='preview' className={clCore.image} />
                <H6 className={clCore.title}>{title}</H6>
                <div className={cl.line}>
                    <Text14M className={cl.description}>{description}</Text14M>
                </div>
            </Link>
        </div>
    );
};

export default CardDefaultItem;