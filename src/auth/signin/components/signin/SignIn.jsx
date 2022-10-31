import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router"

import clAuth from "../../../core/components/_Auth.module.scss"
import clSignIn from "./_SignIn.module.scss"

import H2 from "../../../../core/ui/title/H2/H2";
import LinkPurple from "../../../../core/ui/link/purple/LinkPurple";
import ButtonPurpleFR from "../../../../core/ui/button/radius/fill/purple/ButtonPurpleFR";
import Text14 from "../../../../core/ui/text/14/Text14";

import emailSVG from "../../../../core/static/img/email.svg"
import lockSVG from "../../../../core/static/img/lock.svg"
import InputDefault from "../../../../core/components/default_input/InputDefault";
import {getTokenData, logout} from "../../../api/authAPI";


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
                return mainUrl('../')
            },
            () => {
                console.log('error')
                setErrMsg('Неправильный логин или пароль')
            }
        );
    }

    logout()

    return (
        <form className={[clAuth.block, className].join(" ")} onSubmit={handleSubmit}>
            <H2 className={clAuth.title}>Вход</H2>

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
                <ButtonPurpleFR type="submit">Войти</ButtonPurpleFR>
            </a>

            <Text14 className={clAuth.navDescription}>
                Нет аккаунта?
                <LinkPurple to="/signup" className={clAuth.navDescription__link}> Зарегистрироваться</LinkPurple>
            </Text14>
        </form>
    );
};

export default SignIn;