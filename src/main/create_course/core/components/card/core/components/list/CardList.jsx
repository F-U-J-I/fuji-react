import React from 'react';
import cl from './_CardList.module.scss'
import H3 from "../../../../../../../../core/ui/title/H3/H3";

const CardList = ({title, children, className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <H3>{title}</H3>
            <div className={cl.list}>
                {children}
            </div>
        </div>
    );
};

export default CardList;