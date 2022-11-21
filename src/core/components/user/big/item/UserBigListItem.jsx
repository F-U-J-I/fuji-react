import React, {useState} from 'react';
import cl from './_UserBigListItem.module.scss';
import {getImage} from "../../../../api/mainAPI";
import H5 from "../../../../ui/title/H5/H5";
import Text16M from "../../../../ui/text/16/medium/Text16M";
import ButtonPurpleBigOR from "../../../../ui/button/radius/outline/purple/big/ButtonPurpleBigOR";
import ButtonPurpleBigFR from "../../../../ui/button/radius/fill/purple/big/ButtonPurpleBigFR";
import {Link} from "react-router-dom";
import {USER_URL} from "../../../../service/urls";

const UserBigListItem = ({user, className, ...props}) => {
    const isIAm = user.is_subscribed === null
    const [isSubscription, setIsSubscription] = useState(user.is_subscribed)
    const to = `${USER_URL}/${user.path}`
    const handleOnClickSubscription = () => {
        setIsSubscription(!isSubscription)
    }

    return (
        <Link to={to} className={[cl.user, className].join(" ")} {...props}>
            <img src={getImage(user.avatar_url)} alt='avatar' className={cl.avatar}/>
            <div className={cl.text}>
                <H5>{user.username}</H5>
                <Text16M className={cl.status}>Пользователь</Text16M>
                <Text16M className={cl.path}>@{user.path}</Text16M>
                {user.description
                    ? <Text16M className={cl.description}>{user.description}</Text16M>
                    : <Text16M className={cl.withoutDescription}>Нет описания</Text16M>
                }
                {!isIAm && <>{
                    isSubscription
                        ? <ButtonPurpleBigOR title="Отписаться" onClick={handleOnClickSubscription}
                                             className={cl.button}/>
                        : <ButtonPurpleBigFR title="Подписаться" onClick={handleOnClickSubscription}
                                             className={cl.button}/>
                }</>}
            </div>
        </Link>
    );
};

export default UserBigListItem;