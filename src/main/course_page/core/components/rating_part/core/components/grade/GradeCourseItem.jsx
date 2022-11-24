import React, {useState} from 'react';
import cl from './_GradeCourseItem.module.scss'
import getClassNameColor from "../../../../../../../../core/service/rating";
import {addList, removeList} from "../../../../../../../../core/service/list";
import clColor from "../../../../../../../../core/components/rating/_Rating.module.scss";
import H4 from "../../../../../../../../core/ui/title/H4/H4";

const GradeCourseItem = ({number, active, className, ...props}) => {
    const classNameColor = getClassNameColor(number)
    const list = [cl.grade, className]
    if (active)
        list.push(classNameColor)
    const [classList, setClassList] = useState(list)

    const handleOnMouseEnter = () => {
        if (!active)
            setClassList(addList(classNameColor, classList))
    }
    const handleOnMouseLeave = () => {
        if (!active)
            setClassList(removeList(classNameColor, classList))
    }

    return (
        <div className={classList.join(" ")} {...props}
             onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <H4 className={[cl.title, clColor.title].join(" ")}>{number}</H4>
        </div>
    );
};

export default GradeCourseItem;