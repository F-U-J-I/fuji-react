import React, {useState} from 'react';
import cl from './_CourseTitleWrapper.module.scss'
import TitleWrapper from "../core/components/title_wrapper/TitleWrapper";

const CourseTitleWrapper = ({title, imageClassName, statusClassName, ...props}) => {
    const [titleLocal, setTitleLocal] = useState(title)
    return (
        <TitleWrapper status='Курс'
                      title={titleLocal}
                      setTitle={setTitleLocal}
                      imageClassName={[cl.image, imageClassName].join(" ")}
                      statusClassName={[cl.status, statusClassName].join(" ")}
                      {...props}/>
    );
};

export default CourseTitleWrapper;