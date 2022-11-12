import React, {useState} from 'react';

import Text18M from "../../text/18/medium/Text18M";
import Text18B from "../../text/18/bold/Text18B";
import Text14M from "../../text/14/medium/Text14M";

import cl from './_InputEdit.module.scss'
import warningSVG from "../../../static/img/warning-fill-red.svg"


const InputEdit = ({title, id, required, type, value, className, classNameInput, ...props}) => {
    const [error, setError] = useState(false)

    if (required) {
        if (value === '' && !error)
            setError(true)
        else if (value.trim() !== '' && error)
            setError(false)
    }

    return (
        <div className={[className, cl.wrapper].join(" ")}>
            <label className={cl.label} htmlFor={id}>
                <Text18M>{title}</Text18M>
                {required && <Text18B className={cl.symbolRequired}>*</Text18B>}
            </label>
            {type === 'textarea'
                ? <textarea className={[classNameInput, cl.textarea].join(" ")} id={id} value={value} required={required} {...props}/>
                : <input type={type} className={[classNameInput, cl.input].join(" ")} id={id} value={value} required={required} {...props}/>
            }
            {required && error &&
                <span className={cl.error}>
                    <img src={warningSVG} alt="warning" />
                    <Text14M className={cl.errorText}>Вы не ввели название</Text14M>
                </span>
            }

        </div>
    );
};

export default InputEdit;