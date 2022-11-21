import React from 'react';
import EmptyList from "../../../empty/EmptyList";
import cl from "./_UserMiniList.module.scss";
import UserMiniListItem from "../item/UserMiniListItem";

const UserMiniList = ({titleEmpty, descriptionEmpty, users, className, ...props}) => {
    if (users === undefined || users == null || users.length === 0)
        return <UserEmptyList title={titleEmpty} description={descriptionEmpty} className={className} {...props} />

    return (
        <div className={[cl.users, className].join(" ")} {...props}>
            {users.map(item =>
                <UserMiniListItem key={item.path} user={item}/>
            )}
        </div>
    );
};

const UserEmptyList = ({title, description, className, ...props}) => {
    let descriptionLocal = 'Таких пользователей нет :[';
    if (description !== undefined && description !== null)
        descriptionLocal = description
    return <EmptyList title={title} description={descriptionLocal} className={className} {...props} />

}

export default UserMiniList;