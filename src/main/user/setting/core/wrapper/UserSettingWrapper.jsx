import React, {Component} from 'react';
import cl from './_UserSettingWrapper.module.scss'
import TopMenu from "../../../../../core/components/menu/top/TopMenu";
import {changingProfileId, swapPasswordId} from "./core/service/menuID";
import {UserSettingWrapperContext} from "./core/context/UserSettingWrapperContext";
import {UserWrapperContext} from "../../../core/wrapper/core/context/UserWrapperContext";
import {SETTING_ID} from "../../../core/wrapper/core/wallpaper/core/menu/core/service/UserMenuService";


class UserSettingWrapper extends Component {
    static contextType = UserWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            activeId: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setActiveId(SETTING_ID)
        this.context.setPath(sessionStorage.getItem('path'))
    }

    _setActiveId = (newId) => {
        this.setState({activeId: newId})
    }

    render() {
        const {children, ...props} = this.props;
        const {activeId} = this.state;

        const content = (
            <UserSettingWrapperContext.Provider value={{
                setActiveId: this._setActiveId,
                ...props
            }}>
                {children}
            </UserSettingWrapperContext.Provider>
        )

        const menu = [
            {title: 'Изменение профиля', to: '/settings/', id: changingProfileId},
            {title: 'Смена пароля', to: '/settings/swap-password/', id: swapPasswordId},
        ]

        return (
            <div>
                <TopMenu menu={menu} activeID={activeId} className={cl.menu} />
                <div className={cl.content}>
                    {content}
                </div>
            </div>
        );
    }
}

const UserSettingWrapperContextConsumer = UserSettingWrapperContext.Consumer;

export {UserSettingWrapper, UserSettingWrapperContextConsumer};

// export default UserSettingWrapper;