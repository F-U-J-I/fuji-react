import React, {Component} from 'react';
import cl from './_Learn.module.scss'
import {MainPageWrapperContext} from "../../core/context/Context";
import {learnId} from "../../core/wrapper/main_page_wrapper/core/service/activeIdService";
import UserLearn from "../../core/components/user_learn/UserLearn";
import {
    TOP_MENU_DEFAULT
} from "../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";

class Learn extends Component {
    static contextType = MainPageWrapperContext;

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setActiveId(learnId)
        this.context.setMin(false)
        this.context.setTopMenu(TOP_MENU_DEFAULT)
    }

    render() {
        const {...props} = this.props;
        const path = sessionStorage.getItem('path')
        return <UserLearn className={cl.wrapper} path={path} {...props} />
    }
}

export default Learn;