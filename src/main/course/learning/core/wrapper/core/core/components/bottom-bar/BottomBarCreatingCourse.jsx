import React from 'react';
import cl from './_BottomBarCreatingCourse.module.scss'
import ButtonR from "../../../../../../../../../core/ui/button/radius/core/component/button_radius/ButtonR";
import {updateStep} from "../../../../../../../../core/api/courseAPI";
import {withParams} from "../../../../../../../../../core/service/params";
import {useParams} from "react-router";

const BottomBarCreatingCourse = ({title, content, className, ...props}) => {
    const params = useParams()

    const saveOnClick = () => {
        console.log(content)
        const body = {
            title: title,
            // content: content,
        }
        updateStep(params.path, params.pathTheme, params.pathLesson, params.pathStep, body).then({

        })
    }

    return (
        <div className={[cl.bar, className].join(" ")} {...props}>
            <ButtonR className={[cl.button, cl.delete].join(" ")} title='Удалить шаг' />
            <ButtonR className={[cl.button, cl.save].join(" ")} onClick={saveOnClick} title='Сохранить шаг' />
        </div>
    );
};

export default withParams(BottomBarCreatingCourse);