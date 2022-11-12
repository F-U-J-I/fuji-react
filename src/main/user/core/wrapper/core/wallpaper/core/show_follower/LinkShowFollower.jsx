import React from 'react';
import {Link} from "react-router-dom";
import cl from "./_LinkShowFollower.module.scss";
import Text16Bl from "../../../../../../../../core/ui/text/16/black/Text16Bl";
import Text16M from "../../../../../../../../core/ui/text/16/medium/Text16M";

const LinkShowFollower = ({count, text, className, to, ...props}) => {
    return (
        <Link to={to} className={className} {...props}>
            <pre className={cl.text}>
                <Text16Bl>{count} </Text16Bl>
                <Text16M>{text}</Text16M>
            </pre>
        </Link>
    );
};

export default LinkShowFollower;