import React from 'react';
import H2 from "../../../../../../ui/title/H2/H2";
import cl from "./_TitleTextCollection.module.scss";
import {Link} from "react-router-dom";

const TitleTextCollection = ({title, to, isTitleText, className, ...props}) => {
    return (
        <div>
            {isTitleText
                ? <H2 className={className} {...props}>{title}</H2>
                : (
                    <Link to={to} className={className} {...props}>
                        <H2 className={cl.title}>{title}</H2>
                    </Link>
                )
            }
        </div>
    );
};

export default TitleTextCollection;