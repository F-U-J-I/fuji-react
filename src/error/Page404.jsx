import React from 'react';
import cl from './_Page404.module.scss'

import H1 from "../core/ui/title/H1/H1";
import {useNavigate} from "react-router";
import ButtonPurpleBigFR from "../core/ui/button/radius/fill/purple/big/ButtonPurpleBigFR";
import H2 from "../core/ui/title/H2/H2";
import Text24M from "../core/ui/text/24/medium/Text24M";

const Page404 = () => {
    const navigate = useNavigate();
    const handleOnClickNavigateCatalog = () => {
        return navigate('/')
    }
    return (
        <div className={cl.page}>
            <div className={cl.text}>
                <H2>(×_×)</H2>
                <H1 className={cl.title}>404.</H1>
                <Text24M>Такой страницы не существует :(</Text24M>
            </div>
            <ButtonPurpleBigFR onClick={handleOnClickNavigateCatalog} title={'Вернуться на главный экран'}/>
        </div>
    );
};

export default Page404;