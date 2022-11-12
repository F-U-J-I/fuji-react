import React from 'react';
import clCommon from "../core/scss/_Search.module.scss";
import cl from "./_SearchDefault.module.scss";
import InputSearch from "../core/components/input_search/InputSearch";
import ButtonSearch from "../core/components/button_search/ButtonSearch";

const SearchDefault = ({placeHolder, setSearch, search, className, ...props}) => {
    return (
        <div className={[clCommon.search, className].join(" ")} {...props}>
            <InputSearch placeHolder={placeHolder} className={cl.input} value={search} onChange={e => setSearch(e.target.value)} />
            <div className={clCommon.lineV}/>
            <ButtonSearch className={clCommon.buttonSearch} />
        </div>
    );
};

export default SearchDefault;