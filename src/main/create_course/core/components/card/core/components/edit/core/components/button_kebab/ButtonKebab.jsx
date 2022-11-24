import React from 'react';
import cl from './_ButtonKebab.module.scss'
import kebabSVG from "../../../../../../../../../../../core/static/img/kebab-fill-white.svg";
import List from "../../../../../../../../../../../core/components/list/list/List";
import ListItem from "../../../../../../../../../../../core/components/list/list_item/default/ListItem";

const ButtonKebab = ({setIsVisibleEdit, setIsVisibleDelete, className, ...props}) => {
    const menu = [
        {id: 1, title: 'Изменить', onClick: () => setIsVisibleEdit(true)},
        {id: 2, title: 'Удалить', onClick: () => setIsVisibleDelete(true)},
    ]

    return (
        <div className={[cl.wrapper, className].join(" ")} {...props}>
            <button className={cl.kebab}>
                <img src={kebabSVG} alt='kebab' className={cl.image} />
            </button>
            <List className={cl.menu}>
                {menu.map(item =>
                    <ListItem key={item.id} title={item.title} onClick={item.onClick} />
                )}
            </List>
        </div>
    );
};

export default ButtonKebab;