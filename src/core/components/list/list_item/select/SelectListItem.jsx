import React from 'react';
import clDefault from "../core/_ListItem.module.scss";
import cl from "./_SelectListItem.module.scss";
import Text16M from "../../../../ui/text/16/medium/Text16M";
import checkMarkSVG from "../../../../static/img/check-mark-fill-white.svg";

const SelectListItem = ({className, title, id, nameInput, activeId, ...props}) => {
    return (
        <label className={[clDefault.wrapper, className].join(" ")} {...props}>
            <Text16M>{title}</Text16M>
            <input id={id} type="radio" className={cl.input} name={nameInput}
                   defaultChecked={id === activeId}/>
            <img src={checkMarkSVG} alt='icon' className={cl.check}/>
        </label>
    );
};

export default SelectListItem;