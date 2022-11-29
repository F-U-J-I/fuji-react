import React from 'react';
import cl from './_HEditable.module.scss'
import EditableDiv from "../../../../core/components/editable/EditableDiv";

const HEditable = ({placeholder, className, children, ...props}) => {
    return (
        <EditableDiv placeholder={placeholder} className={[cl.wrapper, className].join(" ")} {...props}>
            {children}
        </EditableDiv>
    );
};

export default HEditable;