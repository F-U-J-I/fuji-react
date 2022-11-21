import React, {useState} from 'react';
import cl from './_UserMiniListItem.module.scss'
import {Link} from "react-router-dom";
import {getImage} from "../../../../api/mainAPI";
import H5 from "../../../../ui/title/H5/H5";
import Text14M from "../../../../ui/text/14/medium/Text14M";
import ButtonGreenBigFR from "../../../../ui/button/radius/fill/green/big/ButtonGreenBigFR";
import {subscribeUser, unsubscribeUser} from "../../../../../main/core/api/userAPI";

const UserMiniListItem = ({user, className, ...props}) => {
    const to = `/users/${user.path}`
    const [isSubscribed, setIsSubscribed] = useState(user.is_subscribed)
    const getTextButton = () => {
        if (isSubscribed)
            return 'Отписаться'
        return 'Подписаться'
    }
    const handleOnClickSubscription = () => {
        setIsSubscribed(!isSubscribed)
        if (isSubscribed)
            unsubscribeUser(user.path).then(
                () => {},
                () => {setIsSubscribed(true)}
            )
        else
            subscribeUser(user.path).then(
                () => {},
                () => {setIsSubscribed(false)}
            )
    }
    return (
        <Link to={to} className={cl.user} {...props}>
            <img src={getImage(user.avatar_url)} alt='avatar' className={cl.avatar}/>
            <H5 className={cl.username}>{user.username}</H5>
            <Text14M className={cl.status}>Пользователь</Text14M>
            <Text14M className={cl.path}>@{user.path}</Text14M>
            {isSubscribed !== null &&
                <ButtonGreenBigFR to='#'
                                  title={getTextButton()}
                                  onClick={handleOnClickSubscription}
                                  className={[cl.button, isSubscribed ? cl.active : ''].join(" ")}/>
            }
        </Link>
    );
};

export default UserMiniListItem;