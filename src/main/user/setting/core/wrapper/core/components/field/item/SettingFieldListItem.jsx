import React, {useState} from 'react';
import cl from './_SettingFieldListItem.module.scss'
import Text18B from "../../../../../../../../../core/ui/text/18/bold/Text18B";
import Text14M from "../../../../../../../../../core/ui/text/14/medium/Text14M";
import warningSVG from "../../../../../../../../../core/static/img/warning-fill-red.svg";

const SettingFieldListItem = ({title, id, type, value, required, placeholder, image, description, className, onChange, ...props}) => {
    const [error, setError] = useState(false)
    if (required) {
        console.log(value)
        if (value === '' && !error)
            setError(true)
        else if (value.trim() !== '' && error)
            setError(false)
    }

    return (
        <div className={[cl.block, className].join(" ")}>
            <label htmlFor={id}><Text18B>{title}</Text18B></label>
            <span className={cl.field}>
                <img alt="icon" className={cl.image} src={image}/>
                <input id={id}
                       type={type}
                       value={value}
                       required={required}
                       placeholder={placeholder}
                       onChange={onChange}
                       className={[cl.input, required && error ? cl.fieldError : ''].join(" ")}
                       {...props}/>
            </span>
            <div className={cl.description}>
                {description && !(required && error) &&
                    <Text14M className={cl.text}>{description}</Text14M>
                }
                {required && error &&
                    <span className={cl.error}>
                    <img src={warningSVG} alt="warning" />
                    <Text14M className={cl.errorText}>Введите значение для этого поля</Text14M>
                </span>
                }
            </div>
        </div>
    );
};

export default SettingFieldListItem;