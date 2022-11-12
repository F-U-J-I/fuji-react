import React, {useState} from 'react';
import clCommon from '../core/scss/_Search.module.scss'
import cl from './_SearchFilter.module.scss'
import ButtonSearch from "../core/components/button_search/ButtonSearch";
import InputSearch from "../core/components/input_search/InputSearch";
import DropDownList from "../../../../../core/components/drop_down_list/DropDownList";
import {filterModalList} from "../../../../../core/service/list";

const SearchFilter = ({className, ...props}) => {
    const [filter, setFilter] = useState(filterModalList[0])
    return (
        <div className={[clCommon.search, className].join(" ")} {...props}>
            <DropDownList list={filterModalList} defaultValue={filter} setDefaultValue={setFilter} className={cl.filter} />
            <div className={clCommon.lineV}/>
            <InputSearch />
            <div className={clCommon.lineV}/>
            <ButtonSearch className={clCommon.buttonSearch} />
        </div>
    );
};

export default SearchFilter;