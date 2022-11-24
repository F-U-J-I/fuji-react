import React, {Component} from 'react';
import cl from './_CreateCourseWrapper.module.scss'
import {MainPageWrapperContext} from "../../../core/context/Context";
import {
    TOP_MENU_CREATE_COURSE
} from "../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";
import {CreateCourseWrapperContext} from "./core/context/CreateCourseWrapperContext";
import {coursePageId, workshopId} from "../../../archive/core/service/menuID";
import TopMenu from "../../../../core/components/menu/top/TopMenu";

class CreateCourseWrapper extends Component {
    static contextType = MainPageWrapperContext;
    constructor(props) {
        super(props);
        this.state = {
            menuId: null,
            path: null,
            to: '#',
            isLoad: false
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setActiveId(null)
        this.context.setTopMenu(TOP_MENU_CREATE_COURSE)
        this.context.setMin(true)
        this.setState({isLoad: true})
    }

    setMenuId = (id) => {
        this.setState({menuId: id})
    }

    setTo = (newTo) => {
        this.setState({to: newTo})
    }

    render() {
        const {menuId, to, isLoad} = this.state;
        const {children, ...props} = this.props;
        const {setTitle, setDescription} = this.context;

        const menu = [
            {title: 'Мастерская', to: to, id: workshopId},
            {title: 'Страница курса', to: '#', id: coursePageId},
        ]

        let content = null
        if (isLoad) {
            content = (
                <CreateCourseWrapperContext.Provider value={{
                    setTitle: setTitle,
                    setDescription: setDescription,
                    setMenuId: this.setMenuId,
                    setTo: this.setTo,
                    ...props
                }}>
                    {children}
                </CreateCourseWrapperContext.Provider>
            )
        }

        return (
            <div>
                <TopMenu menu={menu} activeID={menuId} className={cl.menu} />
                <div className={cl.content}>
                    {content}
                </div>
            </div>
        );
    }
}

const CreateCourseWrapperContextConsumer = CreateCourseWrapperContext.Consumer;
export {CreateCourseWrapper, CreateCourseWrapperContextConsumer};