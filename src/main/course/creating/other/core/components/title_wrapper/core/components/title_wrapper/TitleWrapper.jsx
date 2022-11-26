import React, {useState} from 'react';
import cl from './_TitleWrapper.module.scss'
import GetModalEdit from "./core/components/modal/GetModalEdit";
import Title16B
    from "../../../../../../../../../core/wrapper/main_page_wrapper/core/components/top_bar/create_course/core/components/title/16/Title16B";
import H2 from "../../../../../../../../../../core/ui/title/H2/H2";
import Text16M from "../../../../../../../../../../core/ui/text/16/medium/Text16M";

//import ContentEditable from "react-contenteditable";
//https://www.npmjs.com/package/react-contenteditable
//https://codesandbox.io/s/l91xvkox9l?file=/src/index.js

const TitleWrapper = ({image, status, title, description, titleModal, imageClassName, statusClassName, onClickSubmit, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleOnClick = () => {
        setIsVisible(true)
    }

    return (
        <>
            <div className={[cl.wrapper, className].join(" ")} {...props}>
                <img src={image} alt='preview' onClick={handleOnClick} className={[cl.image, imageClassName].join(" ")} />
                <div className={cl.text}>
                    <Title16B className={statusClassName}>{status}</Title16B>
                    <H2 onClick={handleOnClick} className={cl.title}>{title}</H2>
                    {/*<InputH2 value={title} onChange={e => setTitle(e.target.value.trim())} maxLength={64}/>*/}
                    <Text16M onClick={handleOnClick} className={cl.description}>{description}</Text16M>
                </div>
            </div>
            {isVisible &&
                <GetModalEdit titleModal={titleModal}
                              title={title}
                              preview={image}
                              description={description}
                              onClickSubmit={onClickSubmit}
                              setIsVisible={setIsVisible}/>
            }
        </>
    );
};

export default TitleWrapper;