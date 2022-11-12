import React from 'react';
import cl from "./_InputSearch.module.scss";

const InputSearch = ({className, placeHolder, ...props}) => {
    let placeHolderHTML = 'Поиск';
    if (placeHolder)
        placeHolderHTML = placeHolder
    return (
        <input placeholder={placeHolderHTML} className={[cl.input, className].join(" ")} {...props}/>
    );
};

export default InputSearch;