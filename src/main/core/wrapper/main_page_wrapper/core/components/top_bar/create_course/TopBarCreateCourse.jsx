import React from 'react';
import cl from './_TopBarCreateCourse.module.scss'
import H6 from "../../../../../../../../core/ui/title/H6/H6";
import Title12B from "./core/components/title/12/Title12B";
import UserNav from "../core/components/UserNav";
import ButtonPublishCourse from "./core/components/publish_course/ButtonPublishCourse";
import {Link} from "react-router-dom";

const TopBarCreateCourse = ({title, description, to, className, ...props}) => {
    return (
        <div className={[cl.topBar, className].join(" ")} {...props}>
            <div className={cl.line} />
            <div className={cl.text}>
                {description &&
                    <Link to={to} className={cl.description}>
                        <Title12B className={cl.descriptionText}>{description}</Title12B>
                    </Link>
                }
                <H6>{title}</H6>
            </div>
            <ButtonPublishCourse className={cl.button} />
            <UserNav className={cl.userNav}/>
        </div>
    );
};

export default TopBarCreateCourse;