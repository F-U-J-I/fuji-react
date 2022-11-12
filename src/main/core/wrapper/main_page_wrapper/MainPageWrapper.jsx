import React, {Component} from 'react';
import cl from "./_MainPageWrapper.module.scss";
import SideBar from "./core/components/side_bar/SideBar";
import TopBar from "./core/components/top_bar/TopBar";
import {isLogin} from "../../../../core/api/mainAPI";
import {Navigate} from "react-router";
import {getCollectionProfile} from "../../api/collectionAPI";
import {MainPageWrapperContext} from "../../context/Context";

class MainPageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: sessionStorage.getItem('path'),
            error: false,
            isLoad: false,
            activeId: null,
            addedCollectionList: []
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.setState({path: sessionStorage.getItem('path')})
        this.setProfile()
    }

    _setActiveId = (newId) => {
        this.setState({activeId: newId})
    }

    setProfile() {
        const path = sessionStorage.getItem('path')
        const params = {ordering: 'date_added'}
        getCollectionProfile(path, params)
            .then((result) => {
                this._setAddedCollectionList(result.results)
                this.setState({isLoad: true})
            }, () => {
                this.setState({
                    error: true,
                    isLoad: true
                })
            })
    }

    _setAddedCollectionList = (list) => {
        this.setState({
            addedCollectionList: list,
        })
    }

    render() {
        const {activeId} = this.state;
        const {children, ...props} = this.props;

        if (!isLogin()) {
            return <Navigate to='/signin'/>
        }

        let content = null;
        if (this.state.isLoad) {
            content = (
                <MainPageWrapperContext.Provider value={{
                    setActiveId: this._setActiveId,
                    addedCollectionList: this.state.addedCollectionList,
                    setAddedCollectionList: this._setAddedCollectionList,
                    ...props
                }}>
                    {children}
                </MainPageWrapperContext.Provider>
            )
        }

        return (
            <div className={cl.page}>
                <SideBar activeId={activeId} setCollectionList={this._setAddedCollectionList}
                         collectionList={this.state.addedCollectionList}/>
                <div className={cl.main}>
                    <div className={cl.mainWrapper}>
                        <TopBar/>
                        <div className={[cl.mainContent, this.props.className].join(" ")}>
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