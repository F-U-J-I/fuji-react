import React from 'react';
import cl from './_StatusUser.module.scss'
import H6 from "../../../../../../../../core/ui/title/H6/H6";

const StatusUser = ({className, ...props}) => {
    return (
        <H6 className={[className, cl.text].join(" ")} {...props}>Пользователь</H6>
    );
};

export default StatusUser;