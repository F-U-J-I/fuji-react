import React from 'react';
import cl from './_SearchFS.module.scss'

import SearchDefault from "../../ui/search/search_default/SearchDefault";
import H4 from "../../../../core/ui/title/H4/H4";
import DropDownList from "../../../../core/components/drop_down_list/DropDownList";
import {filterStateModalList, sortStateModalList} from "../../../../core/service/list";

const SearchFs = ({filter, setFilter, sorter, setSorter, setSearch, search, placeHolder, className, ...props}) => {
    return (
        <div className={[cl.navigation, className].join(" ")} {...props}>
            <SearchDefault setSearch={setSearch} search={search} placeHolder={placeHolder}/>
            <div className={cl.help}>
                <div className={cl.helpItem}>
                    <H4 className={cl.helpItemTitle}>Фильтр: </H4>
                    <DropDownList list={filterStateModalList} defaultValue={filter} setDefaultValue={setFilter} />
                </div>

                <div className={cl.helpItem}>
                    <H4 className={cl.helpItemTitle}>Сортировка: </H4>
                    <DropDownList list={sortStateModalList} defaultValue={sorter} setDefaultValue={setSorter} />
                </div>
            </div>
        </div>
    );
};

export default SearchFs;