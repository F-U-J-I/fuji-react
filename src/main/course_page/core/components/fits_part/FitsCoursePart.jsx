import React from 'react';
import cl from './_FitsCoursePart.module.scss'
import TitlePurpleCoursePg from "../core/components/title/purple/TitlePurpleCoursePg";
import FitsItemCourse from "./core/components/FitsItemCourse";

const FitsCoursePart = ({fits, ...props}) => {
    return (
        <div {...props}>
            <TitlePurpleCoursePg title='Кому подойдёт этот курс'/>
            {fits.map(item =>
                <FitsItemCourse key={item.title} title={item.title} description={item.description} className={cl.item} />
            )}
        </div>
    );
};

export default FitsCoursePart;