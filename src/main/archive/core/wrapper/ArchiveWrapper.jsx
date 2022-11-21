import React, {Component} from 'react';
import cl from './_ArchiveWrapper.module.scss'

import {ArchiveWrapperContext} from "./core/context/ArchiveWrapperContext";
import TopMenu from "../../../../core/components/menu/top/TopMenu";
import {collectionId, courseId} from "../service/menuID";
import {MainPageWrapperContext} from "../../../core/context/Context";
import {archiveId} from "../../../core/wrapper/main_page_wrapper/core/service/activeIdService";

class ArchiveWrapper extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            activeId: null,
        }
    }

    componentDidMount() {
        this.context.setActiveId(archiveId)
    }

    _setActiveId = (newId) => {
        this.setState({activeId: newId})
    }

    render() {
        const {children, ...props} = this.props;
        const {activeId} = this.state;

        const content = (
            <ArchiveWrapperContext.Provider value={{
                setActiveId: this._setActiveId,
                ...props
            }}>
                {children}
            </ArchiveWrapperContext.Provider>
        )

        const menu = [
            {title: 'Курсы', to: '/archive/', id: courseId},
            {title: 'Подборки', to: '/archive/collections/', id: collectionId},
        ]

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

const ArchiveWrapperContextConsumer = ArchiveWrapperContext.Consumer;

export {ArchiveWrapper, ArchiveWrapperContextConsumer};