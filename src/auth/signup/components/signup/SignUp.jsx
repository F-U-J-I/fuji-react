import React, {useEffect, useState} from 'react';
import clAuth from "../../../core/components/_Auth.module.scss";
import H2 from "../../../../core/ui/title/H2/H2";
import InputDefault from "../../../../core/components/default_input/InputDefault";
import userSVG from "../../../../core/static/img/user.svg";
import emailSVG from "../../../../core/static/img/email.svg";
import lockSVG from "../../../../core/static/img/lock.svg";
import LinkPurple from "../../../../core/ui/link/purple/LinkPurple";
import ButtonPurpleFR from "../../../../core/ui/button/radius/fill/purple/ButtonPurpleFR";
import Text14M from "../../../../core/ui/text/14/medium/Text14M";
import {useNavigate} from "react-router";
import {logout, register} from "../../../api/authAPI";

const SignUp = ({className}) => {

    const [login, setLogin] = useState('')  // error message
    const [email, setEmail] = useState('')  // email
    const [pwd, setPwd] = useState('')  // password
    const [pwd2, setPwd2] = useState('')  // password

    const [errMsg, setErrMsg] = useState('')  // error message

    //  Очищаем поле с ошибкой, после изменения любого поля
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const loginUrl = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (pwd !== pwd2) {
            setErrMsg('Пароли не совпадают')
        } else {
            let response = register(login, email, pwd)
            response.then(
                () => {
                    setErrMsg('')
                    return loginUrl('../signin')
                },
                error => {
                    console.log('error')
                    console.log(error)
                    if (error.email) {
                        setErrMsg('Пользователь с таким email уже существует')
                    } else if (error.password) {
                        setErrMsg('Не валидный пароль')
                    } else {
                        setErrMsg(error.error)
                    }

                }
            );
        }
    }

    logout()

    return (
        <form className={[clAuth.block, className].join(" ")} onSubmit={handleSubmit}>
            <H2 className={clAuth.title}>Регистрация</H2>

            <p className={[errMsg ? clAuth.messageError : '', clAuth.message].join(" ")}
               aria-live="assertive">{errMsg}</p>

            <div className={clAuth.listFields}>
                <InputDefault
                    title="Как к вам обращаться"
                    image={userSVG} type="text" placeholder="Егор Кринж" id="login" required
                    onChange={(e) => setLogin(e.target.value)} value={login}/>
                <InputDefault
                    title="Электронная почта (Email)"
                    image={emailSVG} type="email" placeholder="fuji@yandex.ru" id="email" required
                    onChange={(e) => setEmail(e.target.value)} value={email}/>
                <InputDefault
                    title="Придумайте пароль"
                    image={lockSVG} type="password" placeholder="Пароль" id="password" required
                    onChange={(e) => setPwd(e.target.value)} value={pwd}/>
                <InputDefault
                    title="Повторите пароль"
                    image={lockSVG} type="password" placeholder="Повтор пароля" id="password2" required
                    onChange={(e) => setPwd2(e.target.value)} value={pwd2}/>
            </div>

            <a className={clAuth.submit} href='/'>
                <ButtonPurpleFR type="submit">Зарегистрироваться</ButtonPurpleFR>
            </a>

            <Text14M className={clAuth.navDescription}>
                Есть аккаунт?
                <LinkPurple to="/signin" className={clAuth.navDescription__link}>Войти</LinkPurple>
            </Text14M>
        </form>
    );
};

export default SignUp;