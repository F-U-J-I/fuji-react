import React, {useState} from 'react';
import {updateTheme} from "../../../../../../core/api/courseAPI";
import {getImage} from "../../../../../../../core/api/mainAPI";
import TitleWrapper from "../core/components/title_wrapper/TitleWrapper";
import cl from "./_ThemeTitleWrapper.module.scss";

const ThemeTitleWrapper = ({pathCourse, pathTheme, title, setTitle, image, statusClassName, ...props}) => {
    const [preview, setPreview] = useState(image)

    const onClickEdit = async (previewCard, titleCard) => {
        const body = new FormData()
        body.append('path', pathTheme)
        body.append('title', titleCard)
        if (previewCard)
            body.append('image_url', previewCard, previewCard.name)

        updateTheme(pathCourse, pathTheme, body).then(
            r => {
                setTitle(r.title)
                setPreview(getImage(r.image_url))
                return true
            }
        )
    }

    return (
        <TitleWrapper status='Урок'
                      titleModal='Изменение урока'
                      title={title}
                      image={preview}
                      onClickSubmit={onClickEdit}
                      statusClassName={[cl.status, statusClassName].join(" ")}
                      {...props}/>
    );
};

export default ThemeTitleWrapper;