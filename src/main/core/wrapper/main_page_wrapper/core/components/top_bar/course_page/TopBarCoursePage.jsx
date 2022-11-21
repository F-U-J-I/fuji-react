import React from 'react';
import cl from './_TopBarCoursePage.module.scss'
import UserNav from "../core/components/UserNav";

const TopBarCoursePage = ({...props}) => {

    return (
        <div {...props}>
            <UserNav className={cl.userNav}/>
        </div>
    );
};

export default TopBarCoursePage;