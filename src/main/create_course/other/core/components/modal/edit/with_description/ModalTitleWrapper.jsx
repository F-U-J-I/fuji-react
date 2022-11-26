import React, {useState} from 'react';
import cl from './_ModalTitleWrapper.module.scss'
import ModalWrapper
    from "../../../../../../../../core/components/modal/dark/core/components/modal-wrapper/ModalWrapper";
import ImageWrapper from "../../../../../../../../core/ui/image/wrapper_image/ImageWrapper";
import ButtonDarkFR
    from "../../../../../../../../core/ui/button/radius/fill/dark/core/components/button_dark_fill_radius/ButtonDarkFR";
import ButtonPurpleFR
    from "../../../../../../../../core/ui/button/radius/fill/purple/core/components/button_purple_fill_radius/ButtonPurpleFR";
import InputEdit from "../../../../../../../../core/ui/input/edit/InputEdit";
import Text18M from "../../../../../../../../core/ui/text/18/medium/Text18M";

const ModalTitleWrapper = ({titleModal, preview, title, description, setIsVisible, onClickSubmit, wrapperClassName, className, ...props}) => {
    const handleOnClickClose = () => {
        setIsVisible(false)
    }

    const [titleCard, setTitleCard] = useState(title)
    const [descriptionCard, setDescriptionCard] = useState(description)

    const [previewCard, setPreviewCard] = useState(preview)
    const [previewFile, setPreviewFile] = useState(null)

    const onPreviewSelected = (e) => {
        setPreviewFile(e.currentTarget.files[0])
        setPreviewCard(URL.createObjectURL(e.currentTarget.files[0]))
    }

    const handleOnClickSubmit = async () => {
        if (titleCard !== '') {
            onClickSubmit(previewFile, titleCard, descriptionCard).then(
                () => {
                    setIsVisible(false)
                }
            )
        }
    }

    return (
        <ModalWrapper title={titleModal}
                      setIsVisible={setIsVisible}
                      wrapperClassName={wrapperClassName}
                      className={className}
                      {...props}>
            <div className={cl.content}>
                <div className={[cl.preview, cl.contentItem].join(" ")}>
                    <Text18M>Превью</Text18M>
                    <ImageWrapper onChange={onPreviewSelected} classNameImage={cl.previewImage} src={previewCard}/>
                </div>
                <div className={cl.text}>
                    <InputEdit id="title" placeholder="Добавить название" required={true}
                               maxLength={64}
                               title="Название"
                               value={titleCard}
                               classNameInput={cl.input}
                               onChange={(e) => setTitleCard(e.target.value)}/>
                    <InputEdit className={cl.textarea} classNameInput={cl.textareaThis}
                               id="description" placeholder="Добавить описание" type="textarea"
                               title="Описание"
                               value={descriptionCard}
                               onChange={(e) => setDescriptionCard(e.target.value)}/>
                </div>
            </div>
            <div className={cl.navigation}>
                <ButtonDarkFR className={cl.navigationItem} title="Назад" onClick={handleOnClickClose}/>
                <ButtonPurpleFR type="submit" className={cl.navigationItem} title="Сохранить" onClick={handleOnClickSubmit}/>
            </div>
        </ModalWrapper>
    );
};

export default ModalTitleWrapper;