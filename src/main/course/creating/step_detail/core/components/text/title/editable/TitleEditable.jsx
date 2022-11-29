import React from 'react';
import clCore from '../core/scss/_Title.module.scss'
import cl from './_TitleEditable.module.scss'
import {titlePlaceholder} from "../../core/services/placeholder";
import EditableDiv from "../../core/components/editable/EditableDiv";


const TitleEditable = ({title, setTitle, className, ...props}) => {
    return (
        <EditableDiv className={[clCore.title, cl.title, className].join(" ")}
                     onChange={e => setTitle(e.target.value)}
                     placeholder={titlePlaceholder}
                     {...props}>
            {title}
        </EditableDiv>
    );
};

export default TitleEditable;