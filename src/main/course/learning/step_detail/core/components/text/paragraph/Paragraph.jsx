import React from 'react';
import cl from './_Paragraph.module.scss'
import EditableDiv from "../core/components/editable/EditableDiv";

const Paragraph = ({className, children, ...props}) => {
    return (
        <EditableDiv className={[cl.text, className].join(" ")} {...props}>
            {children}
        </EditableDiv>
    );
};

export default Paragraph;