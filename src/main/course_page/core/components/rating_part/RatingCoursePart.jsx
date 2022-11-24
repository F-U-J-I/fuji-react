import React, {useState} from 'react';
import cl from './_RatingCoursePart.module.scss'
import Title64CoursePg from "../core/components/title/64/Title64CoursePg";
import GradeCourseItem from "./core/components/grade/GradeCourseItem";
import H4 from "../../../../../core/ui/title/H4/H4";
import {createGradeCourse, deleteGradeCourse, updateGradeCourse} from "../../../../core/api/courseAPI";
import Text18M from "../../../../../core/ui/text/18/medium/Text18M";


const RatingCoursePart = ({path, rating, setRating, grade, setGrade, ...props}) => {
    const ratingList = [1, 2, 3, 4, 5];
    const [isGrading, setIsGrading] = useState(grade !== null)

    const handleOnClickGrade = (newGrade) => {
        let callback = updateGradeCourse
        if (grade === null)
            callback = createGradeCourse

        callback(path, newGrade).then(r => {
            setRating(r.rating)
            setGrade(newGrade)
            setIsGrading(true)
        })
    }

    const handleOnClickDelete = () => {
        deleteGradeCourse(path).then(() => {
            setIsGrading(false)
        })
    }

    return (
        <div {...props}>
            <Title64CoursePg title='Оцените курс'/>
            <div className={cl.content}>
                {isGrading ? (
                    <>
                        <div className={cl.settingGrade} onClick={handleOnClickDelete}>
                            <H4 className={cl.title}>Ваша оценка</H4>
                            <GradeCourseItem number={grade} active={true} />
                        </div>
                        <Text18M className={cl.help}>Чтобы удалить оценку нажимите на оценку</Text18M>
                    </>
                ) : (
                    <div className={cl.grades}>
                        {ratingList.map(n =>
                            <GradeCourseItem key={n} number={n} onClick={() => handleOnClickGrade(n)}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RatingCoursePart;