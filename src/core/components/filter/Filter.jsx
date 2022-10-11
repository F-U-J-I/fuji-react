import React, {useRef, useState} from 'react';
import cl from './_Filter.module.scss';
import SelectListItem from "../list/list_item/select/SelectListItem";
import ListTitle from "../list/list_title/ListTitle";
import List from "../list/list/List";
import useOutsideAlerter from "../../service/outsideOnClick";


const Filter = ({list, defaultValue, setDefaultValue, className, ...props}) => {
    const filterItemName = 'filterItem'
    const [isVisibleFilter, setIsVisibleFilter] = useState(false)

    const handleClickFilter = (e) => {
        e.preventDefault()
        setIsVisibleFilter(!isVisibleFilter)
    }

    const handleClickFilterItem = (e) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === e.target.id) {
                setDefaultValue(list[i])
            }
        }
        setIsVisibleFilter(false)
    }

    const box = useRef(null);
    useOutsideAlerter(box, setIsVisibleFilter);

    return (
        <form ref={box} className={[cl.select, className].join(" ")} {...props}>
            <ListTitle title={defaultValue.name} onClick={handleClickFilter} />
            <List className={[cl.selectContent, isVisibleFilter ? "" : cl.selectContentActive].join(" ")}>
                {list.map(item =>
                    <SelectListItem key={item.id} title={item.name} id={item.id} nameInput={filterItemName}
                                    onClick={handleClickFilterItem} activeId={defaultValue.id}/>
                )}
            </List>
        </form>
    );
};

export default Filter;