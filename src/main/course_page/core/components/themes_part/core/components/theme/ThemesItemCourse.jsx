import React, {useState} from 'react';
import cl from './_ThemesItemCourse.module.scss'
import crossSVG from '../../../../../../../../core/static/img/cross-fill-white.svg'
import H3 from "../../../../../../../../core/ui/title/H3/H3";
import LessonsItemCourse from "./core/components/LessonsItemCourse";
import H5 from "../../../../../../../../core/ui/title/H5/H5";

const ThemesItemCourse = ({title, lessons, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [content, setContent] = useState([])

    let lessonHTML = [];
    if (lessons.length === 0) {
        lessonHTML = <H5 className={cl.empty}>Здесь пока пусто :(</H5>
    } else {
        for (let i in lessons) {
            lessonHTML.push(
                <LessonsItemCourse key={i} title={lessons[i]} className={cl.lesson}/>
            )
        }
    }
    const handleOnClickSummary = () => {
        if (isVisible)
            setContent([])
        else
            setContent(lessonHTML)
        setIsVisible(!isVisible)
    }

    return (
        <div className={[cl.theme, isVisible ? cl.active : '', className].join(" ")} {...props}>
            <div className={cl.summary}>
                <H3 className={cl.title}>{title}</H3>
                <img src={crossSVG} alt='cross' className={cl.cross} onClick={handleOnClickSummary} />
            </div>
            <div className={[cl.content].join(" ")}>
                {content}
            </div>
        </div>
    );
};

export default ThemesItemCourse;