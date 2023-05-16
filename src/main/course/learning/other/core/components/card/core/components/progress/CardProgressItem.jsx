import React, {useState} from 'react';
import clCommon from '../../scss/_Card.module.scss'
import clCore from '../core/scss/_CardItem.module.scss'
import cl from './_CardProgressItem.module.scss'
import {Link} from "react-router-dom";
import H6 from "../../../../../../../../../../core/ui/title/H6/H6";
import ProgressBarCardProgressItem from "./core/components/progress_bar/ProgressBarCardProgressItem";

const CardProgressItem = ({to, image, title, progress, max_progress, classNameBar, className, ...props}) => {
    return (
        <div className={clCore.block}>
            <Link to={to} className={[clCore.card, clCommon.card, className].join(" ")} {...props}>
                <img src={image} alt='preview' className={clCore.image} />
                <H6 className={clCore.title}>{title}</H6>
                <ProgressBarCardProgressItem progress={progress}
                                             max_progress={max_progress}
                                             classNameBar={classNameBar} className={cl.progressBar}/>
            </Link>
        </div>
    );
};

export default CardProgressItem;