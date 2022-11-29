import React from 'react';
import cl from './_LessonCreate.module.scss'
import createSVG from "../../../../../../../../../core/static/img/add-fill-yellow.svg";
import CardCreate from "../../core/components/create/CardCreate";
import {createLesson} from "../../../../../../../../core/api/courseAPI";

const LessonCreate = ({pathCourse, pathTheme, list, setList}) => {
    const onClickCreate = () => {
        createLesson(pathCourse, pathTheme).then(r => {
            setList([...list, r])
        })
    }

    return (
        <CardCreate image={createSVG}
                    title='Создать тему'
                    onClick={onClickCreate}
                    className={cl.card}/>
    );
};

export default LessonCreate;