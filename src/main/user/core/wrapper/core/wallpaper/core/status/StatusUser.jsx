import React from 'react';
import cl from './_StatusUser.module.scss'
import H5 from "../../../../../../../../core/ui/title/H5/H5";

const StatusUser = ({className, ...props}) => {
    return (
        <H5 className={[className, cl.text].join(" ")} {...props}>Пользователь</H5>
    );
};

export default StatusUser;