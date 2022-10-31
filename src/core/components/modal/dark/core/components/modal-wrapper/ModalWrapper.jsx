import React, {useRef, useState} from 'react';
import cl from './_ModalWrapper.module.scss'
import H1 from "../../../../../../ui/title/H1/H1";
import {useOutsideAlerterAfter} from "../../../../../../service/outsideOnClick";

import crossSVG from '../../../../../../static/img/cross-fill-white.svg'

const ModalWrapper = ({className, setIsVisible, title, children, ...props}) => {

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
                    <H1 className={cl.titleText}>{title}</H1>
                    <img src={crossSVG} alt="icon" className={cl.titleCross} onClick={handleOnClickClose} />
                </div>
                {children}
            </form>
        </div>
    );
};

export default ModalWrapper;