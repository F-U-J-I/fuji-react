import React from 'react';
import cl from "./_H2Editable.module.scss";

import HEditable from "../core/components/editable/HEditable";
import {h2Placeholder} from "../../core/services/placeholder";

const H2Editable = ({className, children, ...props}) => {
    return (
        <HEditable placeholder={h2Placeholder}
                   className={[cl.title, className].join(" ")}
                   {...props}>
            {children}
        </HEditable>
    );
};

export default H2Editable;