import React, {useState} from 'react';
import H5 from "../../../../../core/ui/title/H5/H5";
import ButtonPurpleBigFR from "../../../../../core/ui/button/radius/fill/purple/big/ButtonPurpleBigFR";
import ModalCreateCourse from "./core/components/modal/ModalCreateCourse";

const ButtonCreateCourse = ({...props}) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <ButtonPurpleBigFR onClick={() => setIsVisible(!isVisible)} {...props}>
                <H5>Создать курс</H5>
            </ButtonPurpleBigFR>
            {isVisible &&
                <ModalCreateCourse setIsVisible={setIsVisible} />
            }
        </>
    );
};

export default ButtonCreateCourse;