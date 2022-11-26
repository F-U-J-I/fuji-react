import React, {useState} from 'react';
import LessonEditListItem from "../edit/LessonEditListItem";
import CardList from "../../core/components/list/CardList";
import LessonCreate from "../create/LessonCreate";
import {useNavigate} from "react-router";
import {getStepText} from "../../../../../../../../../core/service/declension";
import {createStep} from "../../../../../../../../core/api/courseAPI";
import {getImage} from "../../../../../../../../../core/api/mainAPI";

const LessonCardList = ({pathCourse, pathTheme, list, ...props}) => {
    const [lessonList, setLessonList] = useState(list)
    const getStep = (count) => {
        if (count === 0)
            return 'Нет шагов'
        return `${count} ${getStepText(count)}`
    }
    const navigate = useNavigate()

    const handleOnClick = (pathLesson, currentStep) => {
        if (currentStep === null)
            createStep(pathCourse, pathTheme, pathLesson).then(
                r => {
                    return navigate(`${pathLesson}/${r.path}/`)
                }
            )
    }

    return (
        <CardList title='Уроки' {...props}>
            {lessonList.map(item =>
                <LessonEditListItem to={`${item.path}/${item.current_step}/`}
                                    onClick={() => handleOnClick(item.path, item.current_step)}
                                    pathCourse={pathCourse}
                                    pathTheme={pathTheme}
                                    pathLesson={item.path}
                                    key={item.path}
                                    image={getImage(item.image_url)}
                                    title={item.title}
                                    description={getStep(item.count_step)}
                                    list={lessonList}
                                    setList={setLessonList} />
            )}
            <LessonCreate pathCourse={pathCourse}
                          pathTheme={pathTheme}
                          list={lessonList}
                          setList={setLessonList} />
        </CardList>
    );
};

export default LessonCardList;