import React from 'react';
import cl from "./_H3Editable.module.scss";

import HEditable from "../core/components/editable/HEditable";
import {h3Placeholder} from "../../core/services/placeholder";

const H3Editable = ({className, children, ...props}) => {
    return (
        <HEditable placeholder={h3Placeholder}
                   className={[cl.title, className].join(" ")}
                   {...props}>
            {children}
        </HEditable>
    );
};

export default H3Editable;