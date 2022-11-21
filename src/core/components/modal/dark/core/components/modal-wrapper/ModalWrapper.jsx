import React, {useRef, useState} from 'react';
import cl from './_ModalWrapper.module.scss'
import H3 from "../../../../../../ui/title/H3/H3";
import {useOutsideAlerterAfter} from "../../../../../../service/outsideOnClick";

import crossSVG from '../../../../../../static/img/cross-fill-white.svg'

const ModalWrapper = ({className, setIsVisible, title, titleClassName, crossClassName, children, ...props}) => {

    const handleOnClickClose = () => {
        setIsVisible(false)
    }

    const box = useRef(null);
    let [counter, setCounter] = useState(0)
    useOutsideAlerterAfter(box, setIsVisible, counter, setCounter);

    return (
        <div className={cl.wrapper}>
            <form ref={box} className={[className, cl.block].join(" ")} {...props}>
                <div className={cl.title}>
                    <H3 className={[cl.titleText, titleClassName].join(" ")}>{title}</H3>
                    <img src={crossSVG} alt="icon" className={[cl.titleCross, crossClassName].join(" ")} onClick={handleOnClickClose} />
                </div>
                <div className={cl.content}>
                    {children}
                </div>
            </form>
        </div>
    );
};

export default ModalWrapper;