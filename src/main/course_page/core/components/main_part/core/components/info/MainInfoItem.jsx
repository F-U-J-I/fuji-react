import React from 'react';
import cl from './_MainInfoItem.module.scss'
import Text16M from "../../../../../../../../core/ui/text/16/medium/Text16M";
import Text16B from "../../../../../../../../core/ui/text/16/bold/Text16B";

const MainInfoItem = ({title, image, description, className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <img src={image} alt='icon' className={cl.image} />
            <pre className={cl.text}>
                <Text16B>{title}</Text16B>
                <Text16M> {description}</Text16M>
            </pre>
        </div>
    );
};

export default MainInfoItem;