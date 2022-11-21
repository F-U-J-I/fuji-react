import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router"

import clAuth from "../../../core/components/_Auth.module.scss"
import clSignIn from "./_SignIn.module.scss"

import H4 from "../../../../core/ui/title/H4/H4";
import LinkPurple from "../../../../core/ui/link/purple/LinkPurple";
import Text14M from "../../../../core/ui/text/14/medium/Text14M";

import emailSVG from "../../../../core/static/img/email.svg"
import lockSVG from "../../../../core/static/img/lock.svg"
import InputDefault from "../../../../core/components/default_input/InputDefault";
import {getTokenData, logout, setUser} from "../../../api/authAPI";
import ButtonSign from "../../../core/components/button/ButtonSign";


const SignIn = ({className}) => {

    const emailRef = useRef('')
    const errRef = useRef()

    const [email, setEmail] = useState('')  // email
    const [pwd, setPwd] = useState('')  // password
    const [errMsg, setErrMsg] = useState('')  // error message

    //  Очищаем поле с ошибкой, после изменения любого поля
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const mainUrl = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = getTokenData(email, pwd)
        response.then(
            () => {
                setErrMsg('')
                setUser().then(() => {
                    return mainUrl('../')
                })
            },
            () => {
                setErrMsg('Неправильный логин или пароль')
            }
        );
    }

    logout().then(() => {})

    return (
        <form className={[clAuth.block, className].join(" ")} onSubmit={handleSubmit}>
            <H4 className={clAuth.title}>Вход</H4>

            <p ref={errRef} className={[errMsg ? clAuth.messageError : '', clAuth.message].join(" ")} aria-live="assertive">{errMsg}</p>

            <div className={clAuth.listFields}>
                <InputDefault
                    title="Электронная почта (Email)"
                    image={emailSVG} type="email" placeholder="fuji@yandex.ru" id="email" required
                    ref={emailRef} onChange={(e) => setEmail(e.target.value)} value={email}/>

                <InputDefault
                    title="Введите пароль"
                    image={lockSVG} type="password" placeholder="Пароль" id="password" required
                    ref={null} onChange={(e) => setPwd(e.target.value)} value={pwd}/>
            </div>

            <LinkPurple to="#" className={clSignIn.navHelp}>Забыли пароль?</LinkPurple>

            <a className={clAuth.submit} href='/'>
                <ButtonSign type="submit">Войти</ButtonSign>
            </a>

            <Text14M className={clAuth.navDescription}>
                Нет аккаунта?
                <LinkPurple to="/signup" className={clAuth.navDescription__link}> Зарегистрироваться</LinkPurple>
            </Text14M>
        </form>
    );
};

export default SignIn;