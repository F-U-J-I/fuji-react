import React, {Component} from 'react';
import {UserWrapperContext} from "../core/wrapper/core/context/UserWrapperContext";
import {SETTING_ID} from "../core/wrapper/core/wallpaper/core/menu/core/service/UserMenuService";
import {withParams} from "../../../core/service/params";


class UserSettingPage extends Component {

    componentDidMount() {
        this.context.setActiveId(SETTING_ID)
        this.context.setPath(sessionStorage.getItem('path'))
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.params.path !== this.props.params.path) {
    //         this.context.setActiveId(SETTING_ID)
    //         this.context.setPath(sessionStorage.getItem('path'))
    //     }
    // }

    static contextType = UserWrapperContext;

    render() {
        return (
            <h1>YES</h1>
        );
    }
}

export default withParams(UserSettingPage);