import React, {Component} from 'react';
import UserWallpaper from "./core/wallpaper/UserWallpaper";
import cl from './_UserWrapper.module.scss'
import {UserWrapperContext} from "./core/context/UserWrapperContext";
import {MainPageWrapperContext} from "../../../core/context/Context";
import {
    TOP_MENU_DEFAULT
} from "../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";


class UserWrapper extends Component {
    static contextType = MainPageWrapperContext;
    constructor(props) {
        super(props);
        this.state = {
            activeId: null,
            path: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setActiveId(null)
        this.context.setMin(false)
        this.context.setTopMenu(TOP_MENU_DEFAULT)
    }

    _setActiveId = (newId) => {
        this.setState({activeId: newId})
    }

    _setPath = (newPath) => {
        this.setState({path: newPath})
    }

    render() {
        const {children, ...props} = this.props;
        const {activeId, path} = this.state;

        const content = (
            <UserWrapperContext.Provider value={{
                setActiveId: this._setActiveId,
                path: path,
                setPath: this._setPath,
                ...props
            }}>
                {children}
            </UserWrapperContext.Provider>
        )

        return (
            <div>
                <UserWallpaper path={path} activeId={activeId} />
                <div className={cl.content}>
                    {content}
                </div>
            </div>
        );
    }
}

const UserWrapperContextConsumer = UserWrapperContext.Consumer;

export {UserWrapper, UserWrapperContextConsumer};