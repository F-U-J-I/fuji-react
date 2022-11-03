import React from 'react';
import cl from './_CourseMiniList.module.scss'
import CourseMini from "../item/CourseMini";
import H3 from "../../../../ui/title/H3/H3";
import H1 from "../../../../ui/title/H1/H1";

const CourseMiniList = ({courses, className, ...props}) => {
    const isEmpty = courses.length === 0
    if (isEmpty) {
        return (
            <div className={[cl.empty, className].join(" ")}>
                <H1 className={cl.title}>{"(>﹏<)"}</H1>
                <H3 className={cl.description}>Здесь пока пусто :(</H3>
            </div>
        );
    }
    return (
        <div className={[cl.courses, className].join(" ")} {...props}>
            {courses.map(item =>
                <CourseMini key={item.path} course={item}/>
            )}
        </div>
    );
};

export default CourseMiniList;