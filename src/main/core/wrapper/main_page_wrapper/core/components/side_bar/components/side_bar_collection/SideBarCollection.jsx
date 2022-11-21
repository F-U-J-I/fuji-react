import React from 'react';
import cl from './_SideBarCollection.module.scss'
import {Link} from "react-router-dom";
import Text16M from "../../../../../../../../../core/ui/text/16/medium/Text16M";

const SideBarCollection = ({to, image, title, classNameImage, className, ...props}) => {
    const alt = 'icon'
    return (
        <Link to={to} className={[cl.collection, className].join(" ")} {...props}>
            <img src={image} alt={alt} className={[cl.collectionImage, classNameImage].join(" ")}/>
            <Text16M className={cl.collectionTitle}>{title}</Text16M>
        </Link>
    );
};

export default SideBarCollection;