import React, {useState} from 'react';
import cl from './_ThemeEditListItem.module.scss'
import CardEdit from "../../core/components/edit/CardEdit";
import {deleteTheme, updateTheme} from "../../../../../../../core/api/courseAPI";
import {getImage} from "../../../../../../../../core/api/mainAPI";
import {getIndex} from "../../core/services/getIndex";

const ThemeEditListItem = ({pathCourse, pathTheme, to, image, title, description, list, setList, className, ...props}) => {
    const [titleLocal, setTitleLocal] = useState(title)
    const [preview, setPreview] = useState(image)
    const onClickEdit = async (previewCard, titleCard) => {
        const body = new FormData()
        body.append('path', pathTheme)
        body.append('title', titleCard)
        if (previewCard)
            body.append('image_url', previewCard, previewCard.name)

        updateTheme(pathCourse, pathTheme, body).then(
            r => {
                setTitleLocal(r.title)
                setPreview(getImage(r.image_url))
                return true
            }
        )
    }

    const onClickDelete = () => {
        deleteTheme(pathCourse, pathTheme).then(
            r => {
                const array = [...list]
                const index = getIndex(list, r.path)
                if (index !== -1) {
                    array.splice(index, 1)
                    setList(array)
                }
            }
        )
    }

    return (
        <CardEdit to={to} image={preview}
                  title={titleLocal} description={description}
                  titleModalEdit='Изменение темы'
                  onClickEdit={onClickEdit}
                  titleModalDelete='Удаление темы'
                  onClickDelete={onClickDelete}
                  className={cl.card} {...props} />
    );
};

export default ThemeEditListItem;