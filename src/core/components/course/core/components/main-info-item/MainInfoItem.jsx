import React from 'react';
import cl from "./_MainInfoItem.module.scss";
import Text18M from "../../../../../ui/text/18/medium/Text18M";

const MainInfoItem = ({image, title, className, ...props}) => {
    return (
        <div className={[cl.info, className].join(" ")} {...props}>
            <img className={cl.infoImage} src={image} alt='icon'/>
            <Text18M className={cl.infoTitle}>{title}</Text18M>
        </div>
    );
};

export default MainInfoItem;