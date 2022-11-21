import React from 'react';
import cl from './_UserBigList.module.scss'
import UserBigListItem from "../item/UserBigListItem";

const UserBigList = ({users, className, ...props}) => {
    return (
        <div className={[cl.users, className].join(" ")} {...props}>
            {users.map(item =>
                <UserBigListItem user={item} key={item.path} />
            )}
        </div>
    );
};

export default UserBigList;