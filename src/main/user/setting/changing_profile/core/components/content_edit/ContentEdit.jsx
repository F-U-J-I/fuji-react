import React, {useState} from 'react';
import AvatarChangingProfile from "./core/avatar/AvatarChangingProfile";
import {getImage} from "../../../../../../../core/api/mainAPI";
import SettingFieldList from "../../../../core/wrapper/core/components/field/list/SettingFieldList";
import cl from "./_ContentEdit.module.scss";
import ButtonPurpleBigFR from "../../../../../../../core/ui/button/radius/fill/purple/big/ButtonPurpleBigFR";
import ButtonDarkBigFR from "../../../../../../../core/ui/button/radius/fill/dark/big/ButtonDarkBigFR";

const ContentEdit = ({image, username, email, path, ...props}) => {
    const [imageState, setImageState] = useState(getImage(image))
    // const [imageFile, setImageFile] = useState(null)

    const onSelected = (e) => {
        // setImageFile(e.currentTarget.files[0])
        setImageState(URL.createObjectURL(e.currentTarget.files[0]))
    }

    const [usernameState, setUsernameState] = useState(username)
    const [emailState, setEmailState] = useState(email)
    const [pathState, setPathState] = useState(path)
    return (
        <div className={cl.wrapper} {...props}>
            <div className={cl.content}>
                <AvatarChangingProfile image={imageState} onSelected={onSelected} />
                <SettingFieldList className={cl.fields}
                                  username={usernameState} setUsername={setUsernameState}
                                  email={emailState} setEmail={setEmailState}
                                  path={pathState} setPath={setPathState} />
            </div>
            <div className={cl.buttons}>
                <ButtonDarkBigFR className={cl.buttonsItem} title='Отменить' />
                <ButtonPurpleBigFR className={cl.buttonsItem} title='Сохранить' />
            </div>
        </div>
    );
};

export default ContentEdit;