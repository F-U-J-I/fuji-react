import React from 'react';
import cl from './_SettingFieldList.module.scss'
import SettingFieldListItem from "../item/SettingFieldListItem";
import userSVG from '../../../../../../../../../core/static/img/user.svg'
import emailSVG from '../../../../../../../../../core/static/img/email.svg'
import cardSVG from '../../../../../../../../../core/static/img/id-card-outline-gray.svg'
import {R_PATH} from "../../../../../../../../../core/service/regular";

const SettingFieldList = ({username, setUsername,
                              email, setEmail,
                              path, setPath,
                              className, ...props}) => {

    const setValidEmail = (e) => {
        // const value = e.target.value.trim().toLowerCase().match(R_EMAIL).input
        const value = e.target.value
        setEmail(value);
    }

    const setValidPath = (e) => {
        const value = e.target.value.trim().replace(R_PATH, '')
        setPath(value);
    }

    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <SettingFieldListItem title="Форма обращения к вам"
                                  value={username}
                                  type='text'
                                  onChange={(e) => setUsername(e.target.value)}
                                  placeholder="Дмитрий Макгер"
                                  image={userSVG}
                                  required={true}
                                  className={cl.item}/>
            <SettingFieldListItem title="Электронная почта (Email)"
                                  value={email}
                                  type='email'
                                  onChange={setValidEmail}
                                  placeholder="fuji@yandex.ru"
                                  image={emailSVG}
                                  required={true}
                                  className={cl.item}/>
            <SettingFieldListItem title="Ваш id"
                                  value={path}
                                  type='text'
                                  onChange={setValidPath}
                                  placeholder="path"
                                  image={cardSVG}
                                  required={true}
                                  description={`fuji.com/${path}`}
                                  maxLength={64}
                                  className={cl.item}/>
        </div>
    );
};

export default SettingFieldList;