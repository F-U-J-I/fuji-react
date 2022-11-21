import React, {Component} from 'react';
import cl from "./_MainPageWrapper.module.scss";
import SideBar from "./core/components/side_bar/SideBar";
import TopBarDefault from "./core/components/top_bar/default/TopBarDefault";
import {getCollectionProfile} from "../../api/collectionAPI";
import {MainPageWrapperContext} from "../../context/Context";
import {menuList} from "../../../../core/service/list";
import {getError} from "../../../../core/service/error";
import TopBarCoursePage from "./core/components/top_bar/course_page/TopBarCoursePage";
import {TOP_MENU_DEFAULT} from "./core/components/top_bar/core/services/topMenuService";


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

    _setMin = (bool) => {
        this.setState({isMin: bool})
    }

    _setTopMenu = (id) => {
        this.setState({topMenu: id})
    }

    render() {
        const {activeId, menu, search, filter, addedCollectionList, isMin, topMenu, isLoad, error} = this.state;
        const {children, ...props} = this.props;

        if (error) return getError(error)

        let content = null;
        if (isLoad) {
            content = (
                <MainPageWrapperContext.Provider value={{
                    setActiveId: this._setActiveId,
                    search: search,
                    filter: filter,
                    setFilter: this._setFilter,
                    addedCollectionList: addedCollectionList,
                    menu: menu,
                    setAddedCollectionList: this._setAddedCollectionList,
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
                        {topMenu === TOP_MENU_DEFAULT
                        ? <TopBarDefault search={search} setSearch={this._setSearch} filter={filter} setFilter={this._setFilter}
                                         menu={menu}/>
                        : <TopBarCoursePage />
                        }
                        <div className={[cl.mainContent, topMenu === TOP_MENU_DEFAULT ? cl.mainContentRadius : '',
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