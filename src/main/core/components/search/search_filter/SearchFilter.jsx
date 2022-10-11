import React, {useState} from 'react';
import cl from './_SearchFilter.module.scss'
import ButtonSearch from "../core/components/button_search/ButtonSearch";
import InputSearch from "../core/components/input_search/InputSearch";
import Filter from "../../../../../core/components/filter/Filter";

const SearchFilter = ({className, ...props}) => {
    const filterList = [
        {
            name: 'Всё',
            id: 'all'
        },
        {
            name: 'Курсы',
            id: 'course'
        },
        {
            name: 'Подборки',
            id: 'collection'
        },
        {
            name: 'Пользователи',
            id: 'user'
        },
    ]
    const [filter, setFilter] = useState(filterList[0])



    return (
        <div className={[cl.search, className].join(" ")} {...props}>
            <Filter list={filterList} defaultValue={filter} setDefaultValue={setFilter} className={cl.filter} />
            <div className={cl.lineV}/>
            <InputSearch />
            <div className={cl.lineV}/>
            <ButtonSearch className={cl.buttonSearch} />
        </div>
    );
};

export default SearchFilter;