import React from 'react';
import cl from './_H1Editable.module.scss'
import HEditable from "../core/components/editable/HEditable";
import {h1Placeholder} from "../../core/services/placeholder";

const H1Editable = ({className, children, ...props}) => {
    return (
        <HEditable placeholder={h1Placeholder}
                   className={[cl.title, className].join(" ")}
                   {...props}>
            {children}
        </HEditable>
    );
};

export default H1Editable;