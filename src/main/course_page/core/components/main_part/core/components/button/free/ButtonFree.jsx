import React from 'react';
import cl from './_ButtonFree.module.scss'
import Text24M from "../../../../../../../../../core/ui/text/24/medium/Text24M";
import Button from "../../../../../../../../../core/ui/button/core/components/button/Button";
import {startLearnCourse} from "../../../../../../../../core/api/courseAPI";
import {useNavigate} from "react-router";

const ButtonFree = ({path, to, className, ...props}) => {
    const navigate = useNavigate()
    const handleOnClickStartLearn = () => {
        startLearnCourse(path).then(
            () => (navigate(to))
        )
    }

    return (
        <Button onClick={handleOnClickStartLearn} className={[cl.button, className].join(" ")} {...props}>
            <Text24M>Бесплатно</Text24M>
        </Button>
    );
};

export default ButtonFree;