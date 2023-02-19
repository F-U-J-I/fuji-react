import React, {useState} from 'react';
import AvatarChangingProfile from "./core/avatar/AvatarChangingProfile";
import {getImage} from "../../../../../../../core/api/mainAPI";
import SettingFieldList from "../../../../core/wrapper/core/components/field/list/SettingFieldList";
import cl from "./_ContentEdit.module.scss";
import ButtonPurpleBigFR from "../../../../../../../core/ui/button/radius/fill/purple/big/ButtonPurpleBigFR";
import ButtonDarkBigFR from "../../../../../../../core/ui/button/radius/fill/dark/big/ButtonDarkBigFR";
import {updateProfileInfo} from "../../../../../../core/api/userAPI";
import {saveUser} from "../../../../../../../auth/api/authAPI";

const ContentEdit = ({image, username, email, path, ...props}) => {
    const [imageState, setImageState] = useState(getImage(image))
    const [imageFile, setImageFile] = useState(null)

    const onSelected = (e) => {
        setImageFile(e.currentTarget.files[0])
        setImageState(URL.createObjectURL(e.currentTarget.files[0]))
    }

    const [usernameState, setUsernameState] = useState(username)
    const [emailState, setEmailState] = useState(email)
    const [pathState, setPathState] = useState(path)

    const onClickSave = (image, username, email, path) => {
        const body = new FormData()
        body.append('username', username)
        body.append('email', email)
        body.append('path', path)
        if (image)
            body.append('avatar_url', image, image.name)

        updateProfileInfo(body).then(
            r => {
                setUsernameState(r.username)
                setEmailState(r.email)
                setPathState(r.path)
                setImageState(getImage(r.avatar_url))
                saveUser(r)
            }
        )
    }

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
                <ButtonPurpleBigFR className={cl.buttonsItem}
                                   title='Сохранить'
                                   onClick={() => onClickSave(imageFile, usernameState, emailState, pathState)} />
            </div>
        </div>
    );
};

export default ContentEdit;