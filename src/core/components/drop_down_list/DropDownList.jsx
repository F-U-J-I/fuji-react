import React, {useRef, useState} from 'react';
import cl from './_DropDownList.module.scss';
import SelectListItem from "../list/list_item/select/SelectListItem";
import ListTitle from "../list/list_title/ListTitle";
import List from "../list/list/List";
import {useOutsideAlerter} from "../../service/outsideOnClick";


const DropDownList = ({list, defaultValue, setDefaultValue, className, ...props}) => {
    const filterItemName = 'filterItem'
    const [isVisible, setIsVisible] = useState(false)

    const handleClickFilter = (e) => {
        e.preventDefault()
        setIsVisible(!isVisible)
    }

    const handleClickFilterItem = (e) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == e.target.id) {
                setDefaultValue(list[i])
            }
        }
        setIsVisible(false)
    }

    const box = useRef(null);
    useOutsideAlerter(box, setIsVisible);
    return (
        <form ref={box} className={[cl.select, className].join(" ")} {...props}>
            <ListTitle title={defaultValue.title} onClick={handleClickFilter} />
            <List className={[cl.selectContent, isVisible ? "" : cl.selectContentActive].join(" ")}>
                {list.map(item =>
                    <SelectListItem key={item.id} title={item.title} id={item.id} nameInput={filterItemName}
                                    onClick={handleClickFilterItem} activeId={defaultValue.id}/>
                )}
            </List>
        </form>
    );
};

export default DropDownList;