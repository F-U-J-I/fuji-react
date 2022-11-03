import React, {useState, useRef} from 'react';
import cl from "./_Rated.module.scss"
import Text16M from "../../../../../../../../../ui/text/16/medium/Text16M";
import ItemMakeRating from "../make_rating_item/default/ItemMakeRating";
import List from "../../../../../../../../list/list/List";
import {deleteGradeCollection} from "../../../../../../../../../../main/core/api/collectionAPI";
import ListItem from "../../../../../../../../list/list_item/default/ListItem";
import {useOutsideAlerter} from "../../../../../../../../../service/outsideOnClick";

const Rated = ({rating, path, setRating, countRatings, setCountRatings, nameState, setState, deleteState, updateState, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleClickUpdate = () => {
        setState(updateState)
    }

    const handleClickDelete = () => {
        deleteGradeCollection(path).then(
            r => {
                setState(deleteState)
                setRating(r.rating)
                setCountRatings(countRatings - 1)
            },
            e => {
                console.log(e)
            }
        )
    }

    const list = [
        {id: 1, title: 'Изменить оценку', onClick: handleClickUpdate},
        {id: 2, title: 'Удалить оценку', onClick: handleClickDelete},
    ]
    const handleClick = () => {
        setIsVisible(!isVisible)
    }

    const box = useRef(null);
    useOutsideAlerter(box, setIsVisible);
    return (
        <div className={[cl.block, className].join(" ")} ref={box} {...props}>
            <button onClick={handleClick} className={[cl.blockTitle, className].join(" ")}>
                <Text16M className={cl.text}>Изменить оценку</Text16M>
                <ItemMakeRating rating={parseInt(rating, 0)}/>
            </button>
            <List className={[cl.menu, isVisible ? cl.active : ""].join(" ")}>
                {list.map(item =>
                    <ListItem key={item.id} title={item.title} id={item.id} onClick={item.onClick} className={cl.menuItem} />
                )}
            </List>
        </div>
    );
};

export default Rated;