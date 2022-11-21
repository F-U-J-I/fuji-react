import React from 'react';
import cl from './_UserMiniLineList.module.scss'
import UserMiniList from "../list/UserMiniList";

const UserMiniLineList = ({className, ...props}) => {
    return (
        <UserMiniList className={[cl.line, className].join(" ")} {...props} />
    );
};

export default UserMiniLineList;