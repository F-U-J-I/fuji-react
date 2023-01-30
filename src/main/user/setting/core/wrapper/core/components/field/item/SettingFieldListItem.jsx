import React from 'react';
import cl from './_SettingFieldListItem.module.scss'
import Text18B from "../../../../../../../../../core/ui/text/18/bold/Text18B";

const SettingFieldListItem = ({title, id, type, value, required, placeholder, image, className, onChange, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <label htmlFor={id}><Text18B>{title}</Text18B></label>
            <span className={cl.field}>
                <img alt="icon" className={cl.image} src={image}/>
                <input id={id}
                       type={type}
                       value={value}
                       required={required}
                       placeholder={placeholder}
                       onChange={onChange}
                       className={cl.input}/>
            </span>
        </div>
    );
};

export default SettingFieldListItem;