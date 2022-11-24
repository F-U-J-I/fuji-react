import React from 'react';
import cl from './_TitleWrapper.module.scss'
import Title16B
    from "../../../../../../../core/wrapper/main_page_wrapper/core/components/top_bar/create_course/core/components/title/16/Title16B";
import Text16M from "../../../../../../../../core/ui/text/16/medium/Text16M";
import InputH2 from "./core/components/InputH2";

const TitleWrapper = ({image, status, title, setTitle, description, imageClassName, statusClassName, className, ...props}) => {
    return (
        <div className={[cl.wrapper, className].join(" ")} {...props}>
            <img src={image} alt='preview' className={[cl.image, imageClassName].join(" ")} />
            <div className={cl.text}>
                <Title16B className={statusClassName}>{status}</Title16B>
                <InputH2 value={title} setText={setTitle} maxLength={23}/>
                <Text16M className={cl.description}>{description}</Text16M>
            </div>
        </div>
    );
};

export default TitleWrapper;