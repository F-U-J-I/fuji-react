import React, {useState} from 'react';
import ModalWrapper from "../core/components/modal-wrapper/ModalWrapper";

import cl from "./_ModalEdit.module.scss"
import ButtonDarkFOR from "../../../../ui/button/radius/fill_outline/dark/ButtonDarkFOR";
import ButtonPurpleFOR from "../../../../ui/button/radius/fill_outline/purple/ButtonPurpleFOR";
import Text18M from "../../../../ui/text/18/medium/Text18M";
import {getImage} from "../../../../api/mainAPI";
import ImageWrapper from "../../../../ui/image/wrapper_image/ImageWrapper";
import InputEdit from "../../../../ui/input/edit/InputEdit";

const ModalEdit = ({path, titleModal, title, description, image_url, wallpaper, onClickSubmit, setIsVisible, className, ...props}) => {
    const handleOnClickClose = () => {
        setIsVisible(false)
    }

    const [titleCollection, setTitleCollection] = useState(title)
    const [descriptionCollection, setDescriptionCollection] = useState(description)

    const [previewCollection, setPreviewCollection] = useState(getImage(image_url))
    const [previewFile, setPreviewFile] = useState(null)

    const [wallpaperCollection, setWallpaperCollection] = useState(getImage(wallpaper))
    const [wallpaperFile, setWallpaperFile] = useState(null)


    const handleOnClickSubmit = async () => {
        if (titleCollection !== '') {
            onClickSubmit(titleCollection, descriptionCollection, wallpaperFile, previewFile).then(
                () => {
                    setIsVisible(false)
                }
            )
        }
    }

    const onWallpaperSelected = (e) => {
        setWallpaperFile(e.currentTarget.files[0])
        setWallpaperCollection(URL.createObjectURL(e.currentTarget.files[0]))
    }

    const onPreviewSelected = (e) => {
        setPreviewFile(e.currentTarget.files[0])
        setPreviewCollection(URL.createObjectURL(e.currentTarget.files[0]))
    }

    return (
        <ModalWrapper className={className}
                      setIsVisible={setIsVisible}
                      title={titleModal}
                      {...props}>
            <div className={cl.content}>
                <div className={[cl.wallpaper, cl.contentItem].join(" ")}>
                    <Text18M>Обложка</Text18M>
                    <ImageWrapper onChange={onWallpaperSelected} classNameImage={cl.wallpaperImage} src={wallpaperCollection}/>
                </div>
                <div className={cl.contentLine}>
                    <div className={[cl.preview, cl.contentItem].join(" ")}>
                        <Text18M>Превью</Text18M>
                        <ImageWrapper onChange={onPreviewSelected} classNameImage={cl.previewImage} src={previewCollection}/>
                    </div>
                    <div className={[cl.text, cl.contentItem].join(" ")}>
                        <InputEdit id="title" placeholder="Добавить название" required={true} maxLength={25}
                                   title="Название"
                                   value={titleCollection}
                                   onChange={(e) => setTitleCollection(e.target.value)}/>
                        <InputEdit className={cl.textarea} classNameInput={cl.textareaThis}
                                   id="description" placeholder="Добавить описание" type="textarea"
                                   title="Описание"
                                   value={descriptionCollection}
                                   onChange={(e) => setDescriptionCollection(e.target.value)}/>
                    </div>
                </div>
            </div>


            <div className={cl.navigation}>
                <ButtonDarkFOR className={cl.navigationItem} title="Назад" onClick={handleOnClickClose}/>
                <ButtonPurpleFOR type="submit" className={cl.navigationItem} title="Сохранить" onClick={handleOnClickSubmit}/>
            </div>
        </ModalWrapper>
    );
};

export default ModalEdit;