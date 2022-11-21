import React from 'react';
import cl from "./_EmptyList.module.scss";
import H2 from "../../ui/title/H2/H2";
import H5 from "../../ui/title/H5/H5";

const EmptyList = ({title, description, className, ...props}) => {
    const getTitle = () => {
        if (title === undefined)
            return '(>﹏<)'
        return title
    }
    const getDescription = () => {
        if (description === undefined)
            return 'Здесь пока пусто :('
        return description
    }

    return (
        <div className={[cl.empty, className].join(" ")} {...props}>
            <H2>{getTitle()}</H2>
            <H5>{getDescription()}</H5>
        </div>
    );
};

export default EmptyList;