import React, {useState} from 'react';
import cl from './_CourseTitleWrapper.module.scss'
import TitleWrapper from "../core/components/title_wrapper/TitleWrapper";

const CourseTitleWrapper = ({path, title, description, image, imageClassName, statusClassName, ...props}) => {
    return (
        <TitleWrapper status='Курс'
                      title={title}
                      image={image}
                      description={description}
                      imageClassName={[cl.image, imageClassName].join(" ")}
                      statusClassName={[cl.status, statusClassName].join(" ")}
                      {...props}/>
    );
};

export default CourseTitleWrapper;