import React, {Component} from 'react';
import cl from './_CreateCourseWrapper.module.scss'
import {CreateCourseWrapperContext} from "./core/context/CreateCourseWrapperContext";
import {CourseWrapperContext} from "../../../core/wrapper/core/context/CourseWrapperContext";
import {coursePageId, workshopId} from "../../../../archive/core/service/menuID";
import TopMenu from "../../../../../core/components/menu/top/TopMenu";

class CreateCourseWrapper extends Component {
    static contextType = CourseWrapperContext;
    constructor(props) {
        super(props);
        this.state = {
            menuId: null,
            to: '#',
        }
    }

    setMenuId = (id) => {
        this.setState({menuId: id})
    }

    setTo = (newTo) => {
        this.setState({to: newTo})
        this.context.setTo(newTo)
    }

    render() {
        const {menuId, to} = this.state;
        const {children, ...props} = this.props;
        const {setTitle, setDescription, setTopMenu, setSteps} = this.context;

        const menu = [
            {title: 'Мастерская', to: to, id: workshopId},
            {title: 'Страница курса', to: '#', id: coursePageId},
        ]

        const content = (
                <CreateCourseWrapperContext.Provider value={{
                    setTitle: setTitle,
                    setDescription: setDescription,
                    setTopMenu: setTopMenu,
                    setMenuId: this.setMenuId,
                    setTo: this.setTo,
                    setSteps: setSteps,
                    ...props
                }}>
                    {children}
                </CreateCourseWrapperContext.Provider>
            )

        return (
            <>
                <TopMenu menu={menu} activeID={menuId} className={cl.menu} />
                <div className={cl.content}>
                    {content}
                </div>
            </>
        );
    }
}

const CreateCourseWrapperContextConsumer = CreateCourseWrapperContext.Consumer;
export {CreateCourseWrapper, CreateCourseWrapperContextConsumer};