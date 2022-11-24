import React, {useState} from 'react';
import cl from './_ModalCreateCourse.module.scss'
import ModalWrapper
    from "../../../../../../../../core/components/modal/dark/core/components/modal-wrapper/ModalWrapper";
import Text24M from "../../../../../../../../core/ui/text/24/medium/Text24M";
import Input from "../../../../../../../../core/ui/input/default/Input";
import ButtonDarkFR
    from "../../../../../../../../core/ui/button/radius/fill/dark/core/components/button_dark_fill_radius/ButtonDarkFR";
import ButtonPurpleFR
    from "../../../../../../../../core/ui/button/radius/fill/purple/core/components/button_purple_fill_radius/ButtonPurpleFR";
import {createCourse} from "../../../../../../../core/api/courseAPI";
import {useNavigate} from "react-router";

const ModalCreateCourse = ({setIsVisible, ...props}) => {
    const text = 'Введите временное или окончательное название курса. Название вы всегда успеете сменить'
    const [title, setTitle] = useState('')
    const navigate = useNavigate()
    const handleOnClick = () => {
        createCourse(title).then(r =>{
            navigate(`/courses/${r.path}/create/`)
        })
    }

    return (
        <ModalWrapper title='Создание курса'
                      setIsVisible={setIsVisible}
                      {...props}>
            <Text24M className={cl.text}>{text}</Text24M>
            <Input onChange={e => setTitle(e.target.value)} value={title}
                   placeHolder='Например, Основы программирония'
                   className={cl.input} />
            <div className={cl.navigation}>
                <ButtonDarkFR onClick={() => setIsVisible(false)} title='Назад' className={cl.button} />
                <ButtonPurpleFR title='Создать' onClick={handleOnClick} className={cl.button} />
            </div>
        </ModalWrapper>
    );
};

export default ModalCreateCourse;