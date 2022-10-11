import React from 'react';
import Text13B from "../../../ui/text/13/bold/Text13B";
import Text13M from "../../../ui/text/13/medium/Text13M";
import cl from "./_ModalPurpleFR.module.scss"

const ModalPurpleFR = ({title, description, className, ...props}) => {
    return (
        <pre className={[className, cl.modal].join(" ")} {...props}>
            <Text13B>{title}</Text13B>
            <Text13M> {description}</Text13M>
        </pre>
    );
};

export default ModalPurpleFR;