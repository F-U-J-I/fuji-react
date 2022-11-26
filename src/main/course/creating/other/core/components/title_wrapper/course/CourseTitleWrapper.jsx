import React, {useState} from 'react';
import cl from './_CourseTitleWrapper.module.scss'
import TitleWrapper from "../core/components/title_wrapper/TitleWrapper";
import {updatePageCourse} from "../../../../../../../core/api/courseAPI";
import {getImage} from "../../../../../../../../core/api/mainAPI";

const CourseTitleWrapper = ({path, title, description, setTitle, image, imageClassName, statusClassName, ...props}) => {
    const [descriptionLocal, setDescriptionLocal] = useState(description)
    const [preview, setPreview] = useState(image)


    const onClickEdit = async (previewCard, titleCard, descriptionCard) => {
        const body = new FormData()
        body.append('path', path)
        body.append('title', titleCard)
        body.append('description', descriptionCard)
        if (previewCard)
            body.append('image_url', previewCard, previewCard.name)


        updatePageCourse(path, body).then(
            r => {
                setTitle(r.title)
                setPreview(getImage(r.image_url))
                setDescriptionLocal(r.description)
                return true
            }
        )
    }

    return (
        <TitleWrapper status='Курс'
                      title={title}
                      image={preview}
                      description={descriptionLocal}
                      titleModal='Изменение курса'
                      onClickSubmit={onClickEdit}
                      imageClassName={[cl.image, imageClassName].join(" ")}
                      statusClassName={[cl.status, statusClassName].join(" ")}
                      {...props}/>
    );
};

export default CourseTitleWrapper;