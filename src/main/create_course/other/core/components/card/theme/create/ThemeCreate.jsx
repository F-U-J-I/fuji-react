import React from 'react';
import cl from './_ThemeCreate.module.scss'
import createSVG from "../../../../../../../../core/static/img/add-fill-blue.svg";
import CardCreate from "../../core/components/create/CardCreate";
import {createTheme} from "../../../../../../../core/api/courseAPI";

const ThemeCreate = ({path, list, setList}) => {
    const onClickCreateTheme = () => {
        createTheme(path).then(r => {
            setList([...list, r])
        })
    }

    return (
        <CardCreate image={createSVG}
                    title='Создать тему'
                    onClick={onClickCreateTheme}
                    className={cl.card}/>
    );
};

export default ThemeCreate;