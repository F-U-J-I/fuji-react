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
            error: false,
            isLoad: false,
            addedCollectionList: []
        }
    }

    componentDidMount() {
        this.setProfile()
    }

    setProfile() {
        getCollectionProfile()
            .then((result) => {
                this._setAddedCollectionList(result.results)
                this.setState({
                    isLoad: true
                })
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

        if (!isLogin()) {
            return <Navigate to='/signin' replace/>
        }

        let content = null;
        if (this.state.isLoad) {
            content = (
                <MainPageWrapperContext.Provider value={{
                    addedCollectionList: this.state.addedCollectionList,
                    setAddedCollectionList: this._setAddedCollectionList,
                }}>
                    {this.props.children}
                </MainPageWrapperContext.Provider>
            )
            // this.setState({
            //     isLoad: false
            // })
        }

        return (
            <div className={cl.page}>
                <SideBar activeId='catalog' setCollectionList={this._setAddedCollectionList}
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