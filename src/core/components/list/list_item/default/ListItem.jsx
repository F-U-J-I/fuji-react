import React from 'react';
import Text16M from "../../../../ui/text/16/medium/Text16M";
import clDefault from "../core/_ListItem.module.scss";

const ListItem = ({title, className, children, ...props}) => {
    return (
        <div className={[clDefault.wrapper, className].join(" ")} {...props}>
            {title && <Text16M>{title}</Text16M>}
            {children}
        </div>
    );
};

export default ListItem;