import React, {useState} from 'react';
import cl from './_InputH2.module.scss'

const InputH2 = ({value, maxLength, setText, className, ...props}) => {
    const handleOnChange = (text) => {
        // console.log(text)
        // console.log(text.length)
        if (text.length <= maxLength) {
            // console.log('yes')
            setText(text)
        } else {
            // console.log('no')
            // console.log(text.substring(0, maxLength))
            setText(text.substring(0, maxLength))
        }
    }

    return (
        <ContentEditable value={value} maxLength={maxLength} onChange={handleOnChange} className={cl.textarea} {...props}/>
        // <div contentEditable="plaintext-only"
        //      suppressContentEditableWarning={true}
        //      onInput={e => handleOnChange(e.currentTarget.textContent)}
        //      className={[cl.textarea, className].join(" ")}>{value}</div>
    );
};

const ContentEditable = ({value, maxLength, onChange, className, ...props}) => {
    const getValue = (value) => {
        if (value.length > maxLength)
            return value.substring(0, maxLength)
        return value
    }

    const [initialValue] = useState(getValue(value));

    const handleInput = (event) => {
        console.log('handleInput')
        console.log(initialValue)
        if (onChange) {
            onChange(getValue(event.target.innerText));
        }
    };

    return (
        <span contentEditable="true"
              onInput={handleInput}
              className={className}
              suppressContentEditableWarning={true}
              dangerouslySetInnerHTML={{ __html: initialValue }}
              spellCheck={true}
              {...props}
        />
    );
};

export default InputH2;