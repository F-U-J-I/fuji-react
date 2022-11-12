import React from 'react';
import cl from './_Author.module.scss'
import {Link} from "react-router-dom";
import {getImage} from "../../../../api/mainAPI";
import {USER_URL} from "../../../../service/urls";
import Text16M from "../../../../ui/text/16/medium/Text16M";

const Author = ({image, name, className, path, ...props}) => {
    const to = `${USER_URL}/${path}`
    return (
        <Link to={to} className={[cl.author, className].join(" ")} {...props}>
            <span className={cl.wrapper}>
                <img src={getImage(image)} alt="icon" className={cl.image}/>
                <Text16M className={cl.name}>{name}</Text16M>
            </span>
        </Link>
    );
};

export default Author;