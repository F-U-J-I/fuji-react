import React from 'react';
import cl from './_EditableDiv.module.scss'
import ContentEditable from "react-contenteditable";

const EditableDiv = ({placeholder, onChange, className, maxLength, children, ...props}) => {
    const handleOnChange = (e) => {
        console.log('handleOnChange')
        console.log(e)
        onChange(e)
    }

    return (
        <ContentEditable html={children}
                         onChange={handleOnChange}
                         placeholder={placeholder}
                         className={[cl.block, className].join(" ")}
                         {...props} />
        // <div contentEditable={true}
        //      onChange={onChange}
        //      className={className}
        //      {...props}>
        //     {/*{renderToString(children)}*/}
        //     {children}
        // </div>
    );
};

export default EditableDiv;