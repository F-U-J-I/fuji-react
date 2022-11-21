import React from 'react';
import cl from './_TopBar.module.scss'
import SearchFilter from "../../../../../ui/search/search_filter/SearchFilter";
import UserNav from "./core/components/UserNav";

const TopBar = ({menu, search, setSearch, filter, setFilter, className, ...props}) => {

    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <SearchFilter selectList={menu} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} className={cl.search}/>
            <UserNav className={cl.userNav}/>
        </div>
    );
};

export default TopBar;