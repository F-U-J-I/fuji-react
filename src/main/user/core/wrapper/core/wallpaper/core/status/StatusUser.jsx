import React from 'react';
import cl from './_StatusUser.module.scss'
import H4 from "../../../../../../../../core/ui/title/H4/H4";

const StatusUser = ({className, ...props}) => {
    return (
        <H4 className={[className, cl.text].join(" ")} {...props}>Пользователь</H4>
    );
};

export default StatusUser;