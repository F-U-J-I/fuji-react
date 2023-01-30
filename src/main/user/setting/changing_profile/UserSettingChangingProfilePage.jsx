import React, {Component} from 'react';
import cl from './_UserSettingChangingProfilePage.module.scss';
import {withParams} from "../../../../core/service/params";
import {UserSettingWrapperContext} from "../core/wrapper/core/context/UserSettingWrapperContext";
import {changingProfileId} from "../core/wrapper/core/service/menuID";
import H3 from "../../../../core/ui/title/H3/H3";
import {getProfileInfo} from "../../../core/api/userAPI";
import ContentEdit from "./core/components/content_edit/ContentEdit";


class UserSettingChangingProfilePage extends Component {
    static contextType = UserSettingWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            username: null,
            email: null,
            path: null,

            isLoad: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setActiveId(changingProfileId)
        this._setInfo()
    }

    _afterSetStateFinished() {
        this.setState({isLoad: true})
    }

    _setInfo() {
        getProfileInfo().then(
            r => {
                this.setState({
                    image: r.avatar_url,
                    username: r.username,
                    email: r.email,
                    path: r.path,
                }, this._afterSetStateFinished)
            }
        )
    }

    // SETTERS
    //image username email path

    _setImage(newState) {
        this.setState({image: newState})
    }
    _setUsername(newState) {
        this.setState({image: newState})
    }
    _setEmail(newState) {
        this.setState({image: newState})
    }
    _setPath(newState) {
        this.setState({image: newState})
    }

    // Func

    onClickSaveProfile = async (image, username, email, path) => {
        const body = new FormData()
        body.append('username', username)
        body.append('email', email)
        body.append('path', path)
        if (image)
            body.append('avatar_url', image, image.name)

        // updateProfileInfo()
    }

    render() {
        const {image, username, email, path, isLoad} = this.state;

        let contentHTML = null;
        if (isLoad) {
            contentHTML = (
                <ContentEdit image={image} username={username} email={email} path={path} />
            )
        }

        return (
            <>
                <H3 className={cl.title}>Изменение профиля</H3>
                <div className={cl.content}>
                    {contentHTML}
                </div>
            </>
        );
    }
}

export default withParams(UserSettingChangingProfilePage);