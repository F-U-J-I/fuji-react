import React from 'react';
import H3 from "../../../../../../ui/title/H3/H3";
import cl from "./_TitleTextCollection.module.scss";
import {Link} from "react-router-dom";

const TitleTextCollection = ({title, to, isTitleText, className, ...props}) => {
    return (
        <div>
            {isTitleText
                ? <H3 className={className} {...props}>{title}</H3>
                : (
                    <Link to={to} className={className} {...props}>
                        <H3 className={cl.title}>{title}</H3>
                    </Link>
                )
            }
        </div>
    );
};

export default TitleTextCollection;