import React from 'react';
import clCommon from '../core/scss/_Search.module.scss'
import cl from './_SearchFilter.module.scss'
import ButtonSearch from "../core/components/button_search/ButtonSearch";
import InputSearch from "../core/components/input_search/InputSearch";
import DropDownList from "../../../../../core/components/drop_down_list/DropDownList";
import {menuList} from "../../../../../core/service/list";
import {withRouter} from "../../../../../core/service/withRouter";

const SearchFilter = ({navigate, selectList, search, setSearch, filter, setFilter, className, ...props}) => {
    let selectListLocal = selectList;
    if (selectListLocal === undefined || selectListLocal === null)
        selectListLocal = menuList

    const onClickButton = () => {
        if (filter.to !== null)
            navigate(filter.to)
    }

    return (
        <div className={[clCommon.search, className].join(" ")} {...props}>
            <DropDownList list={selectListLocal} defaultValue={filter} setDefaultValue={setFilter} className={cl.filter} />
            <div className={clCommon.lineV}/>
            <InputSearch onChange={e => setSearch(e.target.value)} value={search} />
            <div className={clCommon.lineV}/>
            <ButtonSearch className={clCommon.buttonSearch} onClick={onClickButton} />
        </div>
    );
};

export default withRouter(SearchFilter);