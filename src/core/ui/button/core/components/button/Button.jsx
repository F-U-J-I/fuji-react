import React from 'react';
import Text16M from "../../../../text/16/medium/Text16M";
import {Link} from "react-router-dom";
import cl from "./_Button.module.scss";

const Button = ({to, title, className, children, ...props}) => {
    const content = (<>
        <Text16M>{title}</Text16M>
        {children}
    </>)
    if (to !== undefined && to !== null)
        return (
            <Link to={to} className={[cl.button, className].join(" ")} {...props}>
                {content}
            </Link>
        );


    return (
        <button className={[cl.button, className].join(" ")} {...props}>
            {content}
        </button>
    );
};

export default Button;