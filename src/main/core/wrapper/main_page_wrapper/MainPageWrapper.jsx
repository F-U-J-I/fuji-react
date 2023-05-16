import React, {Component} from 'react';
import cl from "./_MainPageWrapper.module.scss";
import SideBar from "./core/components/side_bar/SideBar";
import TopBarDefault from "./core/components/top_bar/default/TopBarDefault";
import {getCollectionProfile} from "../../api/collectionAPI";
import {MainPageWrapperContext} from "../../context/Context";
import {menuList} from "../../../../core/service/list";
import {getError} from "../../../../core/service/error";
import TopBarCoursePage from "./core/components/top_bar/course_page/TopBarCoursePage";
import {
    TOP_MENU_COURSE_PAGE,
    TOP_MENU_CREATE_COURSE, TOP_MENU_CREATE_STEP_COURSE,
    TOP_MENU_DEFAULT, TOP_MENU_LEARN_COURSE, TOP_MENU_LEARN_STEP_COURSE
} from "./core/components/top_bar/core/services/topMenuService";
import TopBarCreateCourse from "./core/components/top_bar/create_course/TopBarCreateCourse";
import TopBarCreateStepCourse from "./core/components/top_bar/step_course/creating/TopBarCreateStepCourse";
import TopBarLearnCourse from "./core/components/top_bar/learn_course/TopBarLearnCourse";
import TopBarLearnStepCourse from "./core/components/top_bar/step_course/learning/TopBarLearnStepCourse";


class MainPageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: sessionStorage.getItem('path'),
            addedCollectionList: [],

            menu: menuList,
            search: '',
            filter: menuList[0],
            activeId: null,

            title: '',
            description: '',
            to: '#',

            steps: [],

            isMin: false,
            topMenu: TOP_MENU_DEFAULT,
            error: false,
            isLoad: false,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.setState({path: sessionStorage.getItem('path')})
        this._setProfile()
        this.setState({isLoad: true})
    }

    _setActiveId = (newId) => {
        this.setState({activeId: newId})
    }

    _setProfile() {
        const path = sessionStorage.getItem('path')
        const params = {ordering: 'date_added'}
        getCollectionProfile(path, params).then(r => {
            this._setAddedCollectionList(r.results)
        }, e => {
            this.setState({error: e.status})
        })
    }

    _setAddedCollectionList = (list) => {
        this.setState({addedCollectionList: list})
    }

    _setSearch = (newValue) => {
        this.setState({search: newValue})
    }

    _setFilter = (newValue) => {
        this.setState({filter: newValue})
    }

    _setTitle = (newValue) => {
        this.setState({title: newValue})
    }

    _setDescription = (newValue) => {
        this.setState({description: newValue})
    }

    _setMin = (bool) => {
        this.setState({isMin: bool})
    }

    _setTopMenu = (id) => {
        this.setState({topMenu: id})
    }

    _setTo = (str) => {
        this.setState({to: str})
    }

    _setSteps = (newList) => {
        this.setState({steps: newList})
    }

    render() {
        const {activeId, menu, search, filter, addedCollectionList,
            title, description, to,
            steps,
            isMin, topMenu, isLoad, error} = this.state;
        const {children, ...props} = this.props;

        if (error) return getError(error)


        const getTopMenu = () => {
            if (topMenu === TOP_MENU_DEFAULT)
                return <TopBarDefault search={search} setSearch={this._setSearch} filter={filter} setFilter={this._setFilter}
                                      menu={menu}/>
            if (topMenu === TOP_MENU_CREATE_COURSE)
                return <TopBarCreateCourse title={title} description={description} to={to}/>

            if (topMenu === TOP_MENU_CREATE_STEP_COURSE)
                return <TopBarCreateStepCourse existsCreateStep={true} steps={steps}/>

            if (topMenu === TOP_MENU_LEARN_COURSE)
                return <TopBarLearnCourse />

            if (topMenu === TOP_MENU_LEARN_STEP_COURSE)
                return <TopBarLearnStepCourse steps={steps} />
            return <TopBarCoursePage />
        }

        let content = null;
        let topMenuHTML = null;
        if (isLoad) {
            topMenuHTML = getTopMenu()
            content = (
                <MainPageWrapperContext.Provider value={{
                    setActiveId: this._setActiveId,
                    search: search,
                    filter: filter,
                    setFilter: this._setFilter,
                    addedCollectionList: addedCollectionList,
                    menu: menu,
                    setAddedCollectionList: this._setAddedCollectionList,

                    setTitle: this._setTitle,
                    setDescription: this._setDescription,
                    setTo: this._setTo,

                    setSteps: this._setSteps,

                    setMin: this._setMin,
                    topMenu: topMenu,
                    setTopMenu: this._setTopMenu,
                    ...props
                }}>
                    {children}
                </MainPageWrapperContext.Provider>)
        }

        return (
            <div className={cl.page}>
                <SideBar activeId={activeId}
                         setCollectionList={this._setAddedCollectionList}
                         collectionList={this.state.addedCollectionList}
                         isMin={isMin}/>

                <div className={cl.main}>
                    <div className={cl.mainWrapper}>
                        {topMenuHTML}
                        <div className={[cl.mainContent, topMenu !== TOP_MENU_COURSE_PAGE ? cl.mainContentRadius : '',
                            isMin ? cl.min : cl.big, this.props.className].join(" ")}>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const MainPageContextConsumer = MainPageWrapperContext.Consumer;
export {MainPageWrapper, MainPageContextConsumer};