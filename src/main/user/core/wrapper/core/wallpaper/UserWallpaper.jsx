import React, {Component} from 'react';
import {getHeaderUser, subscribeUser, unsubscribeUser} from "../../../../../core/api/userAPI";
import cl from './_UserWallpaper.module.scss'
import Wallpaper from "../../../../../../core/ui/image/wallpaper/Wallpaper";
import {getImage} from "../../../../../../core/api/mainAPI";
import Avatar from "./core/avatar/Avatar";
import StatusUser from "./core/status/StatusUser";
import H2 from "../../../../../../core/ui/title/H2/H2";
import ButtonPurpleBigFR from "../../../../../../core/ui/button/radius/fill/purple/big/ButtonPurpleBigFR";
import ButtonPurpleOR from "../../../../../../core/ui/button/radius/outline/purple/ButtonPurpleOR";
import UserMenu from "./core/menu/UserMenu";
import LinkShowFollower from "./core/show_follower/LinkShowFollower";
import {useNavigate} from "react-router";
import {getError} from "../../../../../../core/service/error";

class UserWallpaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            avatar: null,
            wallpaper: null,
            subscribers: null,
            followers: null,
            isSubscribed: false,
            error: null,
        }
    }

    componentDidMount() {
        this.getHeaderData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.path !== this.props.path) {
            this.getHeaderData()
        }
    }

    _subscribe = () => {
        subscribeUser(this.props.path).then(() => {
            this.setState({
                isSubscribed: true,
                followers: this.state.followers + 1,
            })
        })
    }

    _unsubscribe = () => {
        unsubscribeUser(this.props.path).then(() => {
            this.setState({
                isSubscribed: false,
                followers: this.state.followers - 1,
            })
        })
    }

    getHeaderData() {
        if (this.props.path !== null)
            getHeaderUser(this.props.path).then(
                r => {
                    this.setState({
                        username: r.username,
                        avatar: getImage(r.avatar_url),
                        wallpaper: r.wrapper_url,
                        communications: r.communications,
                        subscribers: r.communications.goal_quantity,
                        followers: r.communications.subscribers_quantity,
                        isSubscribed: r.is_subscribed,
                    })
                },
                e => {
                    this.setState({
                        error: e.status
                    })
                }
            )
    }

    getSubscribersText(subscribers) {
        // 11..19; x5..x9; x0
        if ((subscribers > 10 && subscribers < 20) || (subscribers % 10 > 4 || subscribers % 10 === 0))
            return `подписок`
        // x1, (кроме 11..19)
        else if (subscribers % 10 === 1)
            return `подписка`
        // other
        return `подписки`
    }

    getFollowersText(followers) {
        // 11..19; x5..x9; x0
        if ((followers > 10 && followers < 20) || (followers % 10 > 4 || followers % 10 === 0))
            return `подписчиков`
        // x1, (кроме 11..19)
        else if (followers % 10 === 1)
            return `подписчик`
        // other
        return `подписчика`
    }

    render() {
        const {username, wallpaper, avatar, followers, subscribers, isSubscribed, error} = this.state;
        const {activeId, path} = this.props;

        if (error)
            return getError(error)


        const isMyPage = sessionStorage.path === path

        return (
            <div className={cl.wrapper}>
                {wallpaper
                    ? (
                        <div className={cl.back}>
                            <div className={cl.backDark}/>
                            <Wallpaper image={wallpaper} className={cl.wallpaper}/>
                        </div>
                    )
                    : (
                        <div className={cl.defaultWallpaper} />
                    )
                }

                <div className={cl.front}>
                    <div className={cl.frontWrapper}>
                        <Avatar className={cl.avatar} image={avatar}/>
                        <StatusUser className={cl.status}/>
                        <H2>{username}</H2>
                        <div className={cl.communications}>
                            <LinkShowFollower className={cl.communicationsItem} count={subscribers}
                                              text={this.getSubscribersText(subscribers)} to='#'/>
                            <LinkShowFollower className={cl.communicationsItem} count={followers}
                                              text={this.getFollowersText(followers)} to='#'/>
                        </div>
                        {isSubscribed !== null && (
                            isSubscribed
                                ? <ButtonPurpleOR className={cl.unsubscribe} onClick={this._unsubscribe}
                                                  title="Отписаться"/>
                                :
                                <ButtonPurpleBigFR className={cl.subscribe} onClick={this._subscribe} title="Подписаться"/>
                        )}

                        <UserMenu activeId={activeId} isMyPage={isMyPage} className={cl.menu} path={path}/>
                    </div>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props) {
    const navigation = useNavigate();

    return <UserWallpaper {...props} navigation={navigation} />;
}