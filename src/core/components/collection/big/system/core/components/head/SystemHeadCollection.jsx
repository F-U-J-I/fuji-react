import React from 'react';
import cl from './_SystemHeadCollection.module.scss'
import TitleTextCollection from "../../../../core/components/title/TitleTextCollection";
import LinkGray from "../../../../../../../ui/link/gray/LinkGray";


const SystemHeadCollection = ({title, to, className, ...props}) => {
    return (
        <div className={[className, cl.collection].join(" ")} {...props}>
            <TitleTextCollection to={to} title={title} isTitleText={false}/>
            <LinkGray to={to} className={cl.link} title='Открыть всё'/>
        </div>

    );
};

export default SystemHeadCollection;