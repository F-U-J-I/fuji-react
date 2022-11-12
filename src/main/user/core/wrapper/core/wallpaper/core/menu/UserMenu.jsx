import React from 'react';
import cl from './_UserMenu.module.scss'
import UserMenuItem from "./core/components/menu_item/UserMenuItem";
import {TRAINING_ID, COLLECTION_ID, COURSE_ID, SETTING_ID} from "./core/service/UserMenuService";

const UserMenu = ({isMyPage, activeId, path, className, ...props}) => {
    const data = [
        {id: TRAINING_ID, title: 'Обучение', to: `/users/${path}`},
        {id: COLLECTION_ID, title: 'Подборки', to: `/users/${path}/collections`},
        {id: COURSE_ID, title: 'Курсы', to: `/users/${path}/courses`},
    ]
    if (isMyPage) {
        data.push({id: SETTING_ID, title: 'Настройки', to: `/settings`})
    }

    return (
        <div className={[cl.menu, className].join(" ")} {...props}>
            {data.map(item =>
                <UserMenuItem key={item.id} title={item.title} to={item.to} active={item.id === activeId}
                              className={cl.menuItem}/>
            )}
        </div>
    );
};

export default UserMenu;