import React from 'react';
import cl from "./_EmptyList.module.scss";
import H3 from "../../ui/title/H3/H3";
import H6 from "../../ui/title/H6/H6";

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
            <H3>{getTitle()}</H3>
            <H6>{getDescription()}</H6>
        </div>
    );
};

export default EmptyList;