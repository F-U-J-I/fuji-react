import React from 'react';
import cl from "./_EmptyList.module.scss";
import H2 from "../../ui/title/H2/H2";
import H4 from "../../ui/title/H4/H4";

const EmptyList = ({className, ...props}) => {
    return (
        <div className={[cl.empty, className].join(" ")} {...props}>
            <H2>{"(>﹏<)"}</H2>
            <H4>Здесь пока пусто :(</H4>
        </div>
    );
};

export default EmptyList;