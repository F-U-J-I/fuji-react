import React, {useState} from 'react';
import cl from './_ModalEditCard.module.scss'
import ModalWrapper
    from "../../../../../../../../../../../../core/components/modal/dark/core/components/modal-wrapper/ModalWrapper";
import ImageWrapper from "../../../../../../../../../../../../core/ui/image/wrapper_image/ImageWrapper";
import Input from "../../../../../../../../../../../../core/ui/input/default/Input";
import ButtonDarkFR
    from "../../../../../../../../../../../../core/ui/button/radius/fill/dark/core/components/button_dark_fill_radius/ButtonDarkFR";
import ButtonPurpleFR
    from "../../../../../../../../../../../../core/ui/button/radius/fill/purple/core/components/button_purple_fill_radius/ButtonPurpleFR";
import H6 from "../../../../../../../../../../../../core/ui/title/H6/H6";

const ModalEditCard = ({titleModal, preview, title, setIsVisible, onClickSubmit, wrapperClassName, className, ...props}) => {
    const handleOnClickClose = () => {
        setIsVisible(false)
    }

    const [titleCard, setTitleCard] = useState(title)

    const [previewCard, setPreviewCard] = useState(preview)
    const [previewFile, setPreviewFile] = useState(null)

    const onPreviewSelected = (e) => {
        setPreviewFile(e.currentTarget.files[0])
        setPreviewCard(URL.createObjectURL(e.currentTarget.files[0]))
    }

    const handleOnClickSubmit = async () => {
        if (titleCard !== '') {
            onClickSubmit(previewFile, titleCard).then(
                () => {
                    setIsVisible(false)
                }
            )
        }
    }

    return (
        <ModalWrapper title={titleModal}
                      setIsVisible={setIsVisible}
                      crossClassName={cl.cross}
                      wrapperClassName={wrapperClassName}
                      className={[cl.wrapper, className].join(" ")}
                      {...props}>
            <div className={cl.content}>
                <div className={[cl.preview, cl.contentItem].join(" ")}>
                    <H6 className={cl.contentItemTitle}>Превью</H6>
                    <ImageWrapper onChange={onPreviewSelected} classNameImage={cl.previewImage} src={previewCard}/>
                </div>
                <div className={cl.contentItem}>
                    <H6 className={cl.contentItemTitle}>Название</H6>
                    <Input id="title"
                           placeholder="Название"
                           required={true}
                           maxLength={64}
                           value={titleCard}
                           className={cl.input}
                           onChange={(e) => setTitleCard(e.target.value)}/>
                </div>
            </div>
            <div className={cl.navigation}>
                <ButtonDarkFR className={cl.navigationItem} title="Назад" onClick={handleOnClickClose}/>
                <ButtonPurpleFR type="submit" className={cl.navigationItem} title="Сохранить" onClick={handleOnClickSubmit}/>
            </div>
        </ModalWrapper>
    );
};

export default ModalEditCard;