import React, {Component} from 'react';
import cl from './_UserCollectionPage.module.scss'
import {UserWrapperContext} from "../core/wrapper/core/context/UserWrapperContext";
import {COLLECTION_ID} from "../core/wrapper/core/wallpaper/core/menu/core/service/UserMenuService";
import {withParams} from "../../../core/service/params";
import Collections from "../../core/components/collections/Collections";


class UserCollectionPage extends Component {
    static contextType = UserWrapperContext;

    componentDidMount() {
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.path !== this.props.params.path) {
            this._setData()
        }
    }

    _setData = () => {
        this.context.setActiveId(COLLECTION_ID)
        this.context.setPath(this.props.params.path)
    }

    render() {
        const {params, className, ...props} = this.props;

        return <Collections className={[cl.main, className].join(" ")} path={params.path} {...props}/>
    }
}

export default withParams(UserCollectionPage);