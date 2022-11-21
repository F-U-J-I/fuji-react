import React, {Component} from 'react';
import {MainPageWrapperContext} from "../../../core/context/Context";
import {SearchWrapperPageContext} from "./core/context/SearchWrapperPageContext";
import TopMenu from "../../../../core/components/menu/top/TopMenu";
import cl from "./_SearchWrapperPage.module.scss";
import {
    TOP_MENU_DEFAULT
} from "../../../core/wrapper/main_page_wrapper/core/components/top_bar/core/services/topMenuService";

class SearchWrapperPage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            activeId: null,
        }
    }

    componentDidMount() {
        this.context.setActiveId(null)
        this.context.setMin(false)
        this.context.setTopMenu(TOP_MENU_DEFAULT)
    }

    _getItemMenu = (id) => {
        for (const item of this.context.menu) {
            if (item.id === id) {
                return item
            }
        }
        return null
    }

    _setActiveId = (newId) => {
        this.setState({activeId: newId})
        this.context.setFilter(this._getItemMenu(newId))
    }

    render() {
        const {children, ...props} = this.props;
        const {activeId} = this.state;
        const {menu, search, addedCollectionList, setAddedCollectionList} = this.context;

        const content = (
            <SearchWrapperPageContext.Provider value={{
                setActiveId: this._setActiveId,
                search: search,
                addedCollectionList: addedCollectionList,
                setAddedCollectionList: setAddedCollectionList,
                ...props
            }}>
                {children}
            </SearchWrapperPageContext.Provider>
        )

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

const SearchWrapperPageContextConsumer = SearchWrapperPageContext.Consumer;
export {SearchWrapperPage, SearchWrapperPageContextConsumer};