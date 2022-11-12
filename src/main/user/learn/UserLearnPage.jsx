import React, {Component} from 'react';
import {TRAINING_ID} from "../core/wrapper/core/wallpaper/core/menu/core/service/UserMenuService";
import {UserWrapperContext} from "../core/wrapper/core/context/UserWrapperContext";
import {withParams} from "../../../core/service/params";
import UserLearn from "../../core/components/user_learn/UserLearn";


class UserLearnPage extends Component {
    static contextType = UserWrapperContext;

    componentDidMount() {
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.path !== this.props.params.path) {
            this._setData()
        }
    }

    _setData() {
        this.context.setActiveId(TRAINING_ID)
        this.context.setPath(this.props.params.path)
    }


    render() {
        const {params, ...props} = this.props;
        return <UserLearn path={params.path} {...props} />
    }
}

export default withParams(UserLearnPage);