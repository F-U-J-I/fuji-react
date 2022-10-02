import React from 'react';
import cl from "./_CollectionDescription.module.scss";
import Text16MI from "../../../../../ui/text/16/medium_italic/Text16MI";

const CollectionDescription = ({className, description}) => {
    return (
        <div className={[cl.description, className].join(" ")}>
            <Text16MI>{description}</Text16MI>
        </div>
    );
};

export default CollectionDescription;