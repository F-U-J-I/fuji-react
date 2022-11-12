import React from 'react';
import cl from "./_ButtonSearch.module.scss";
import searchSVG from "../../../../../../../core/static/img/search-outline-white.svg";

const ButtonSearch = ({className, ...props}) => {
    return (
        <button className={[cl.buttonSearch, className].join(" ")} {...props}>
            <img src={searchSVG} alt='icon' className={cl.buttonSearchImage}/>
        </button>
    );
};

export default ButtonSearch;