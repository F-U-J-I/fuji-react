import React from 'react';
import cl from './_BottomBarCreatingCourse.module.scss'
import ButtonR from "../../../../../../../../../core/ui/button/radius/core/component/button_radius/ButtonR";
import {deleteStep, updateStep} from "../../../../../../../../core/api/courseAPI";
import {withParams} from "../../../../../../../../../core/service/params";
import {useNavigate, useParams} from "react-router";

const BottomBarCreatingCourse = ({title, setIsContentUpdated, content, className, ...props}) => {
    const params = useParams()
    const navigate = useNavigate();

    const saveOnClick = () => {
        // setSaveContent(true)
        // console.log(content)
        const body = {
            title: title,
            content: content,
        }
        updateStep(params.path, params.pathTheme, params.pathLesson, params.pathStep, body).then(
            r => {
                setIsContentUpdated(false)
            }
        )
    }

    const deleteOnClick = () => {
        const body = {
            title: title,
            content: content,
        }
        deleteStep(params.path, params.pathTheme, params.pathLesson, params.pathStep, body).then(
            r => {
                setIsContentUpdated(false)
                navigate(`/courses/${params.path}/create/1/1/6/`)

            }
        )
    }

    return (
        <div className={[cl.bar, className].join(" ")} {...props}>
            <ButtonR className={[cl.button, cl.delete].join(" ")} onClick={deleteOnClick} title='Удалить шаг' />
            <ButtonR className={[cl.button, cl.save].join(" ")} onClick={saveOnClick} title='Сохранить шаг' />
        </div>
    );
};

export default withParams(BottomBarCreatingCourse);