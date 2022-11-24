import React from 'react';
import cl from './_CardCreate.module.scss'
import clCommon from '../../scss/_Card.module.scss'
import Text14M from "../../../../../../../../core/ui/text/14/medium/Text14M";


const CardCreate = ({image, title, onClick, className, ...props}) => {
    return (
        <div className={[cl.card, clCommon.card, className].join(" ")} onClick={onClick} {...props}>
            <img src={image} alt='Create Theme' className={cl.image} />
            <Text14M className={cl.title}>{title}</Text14M>
        </div>
    );
};

export default CardCreate;