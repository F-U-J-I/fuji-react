import React from 'react';
import cl from './_SettingFieldList.module.scss'
import SettingFieldListItem from "../item/SettingFieldListItem";
import userSVG from '../../../../../../../../../core/static/img/user.svg'
import emailSVG from '../../../../../../../../../core/static/img/email.svg'
import cardSVG from '../../../../../../../../../core/static/img/id-card-outline-gray.svg'

const SettingFieldList = ({username, setUsername,
                              email, setEmail,
                              path, setPath,
                              className, ...props}) => {
    // const linkOnChange = (path) => {
    //     setPath(`fuji.com/${path}`)
    // }

    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <SettingFieldListItem title="Форма обращения к вам"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  placeholder="Дмитрий Макгер"
                                  image={userSVG}
                                  required={true}
                                  className={cl.item}/>
            <SettingFieldListItem title="Электронная почта (Email)"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="fuji@yandex.ru"
                                  image={emailSVG}
                                  required={true}
                                  className={cl.item}/>
            <div className={[cl.item, cl.line].join(' ')}>
                <SettingFieldListItem title="Ваш id"
                                      value={path}
                                      onChange={(e) => setPath(e.target.value)}
                                      placeholder="path"
                                      image={cardSVG}
                                      required={true}
                                      className={cl.item}/>
                <SettingFieldListItem title="Адрес вашей страницы"
                                      value={`fuji.com/${path}`}
                                      onChange={(e) => setPath(e.target.value)}
                                      placeholder="https://fuji.com/path"
                                      image={cardSVG}
                                      required={true}
                                      className={cl.item}/>
            </div>
        </div>
    );
};

export default SettingFieldList;