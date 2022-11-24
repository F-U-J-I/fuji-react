import React from 'react';
import cl from './_MainCoursePart.module.scss'
import {getImage} from "../../../../../core/api/mainAPI";
import H5 from "../../../../../core/ui/title/H5/H5";
import H1 from "../../../../../core/ui/title/H1/H1";
import ButtonContinue from "./core/components/button/continue/ButtonContinue";
import ButtonFree from "./core/components/button/free/ButtonFree";
import ButtonAdd from "./core/components/button/add/ButtonAdd";
import starSVG from "../../../../../core/static/img/star-fill-yellow.svg";
import userSVG from "../../../../../core/static/img/user-outline-white.svg";
import {getNumber, getWatch} from "../../../../../core/service/number";
import watchSVG from "../../../../../core/static/img/watch-outline-white.svg";
import MainInfoItem from "./core/components/info/MainInfoItem";
import {getFeedbackText, getStudentText} from "../../../../../core/service/declension";


const MainCoursePart = ({course, rating, image, addedCollections, className, ...props}) => {
    const learnPageURL = `/courses/${course.path}/learn/`
    const getRating = () => {
        const dict = {
            id: 0,
            image: starSVG,
            title: 'Нет рейтинга',
        }
        if (course.rating.reviews_count !== 0) {
            dict['title'] = rating
            dict['description'] = `из ${course.rating.reviews_count} ${getFeedbackText(course.rating.reviews_count)}`
        }
        return dict

    }
    const getStudents = () => {
        const dict = {
            id: 1,
            image: userSVG,
            title: 'Нет учащихся',
        }
        if (course.members_amount !== 0) {
            dict['title'] = getNumber(course.members_amount)
            dict['description'] = getStudentText(course.members_amount)
        }
        return dict

    }
    const info = [
        getRating(),
        getStudents(),
        {
            id: 2,
            image: watchSVG,
            title: getWatch(course.duration_in_minutes) + 'ч',
            description: 'контента'
            // title: getWatch(10000) + 'h'
        },
    ]

    return (
        <div className={[cl.main, className].join(" ")} {...props}>
            <div className={cl.wallpaper}>
                <img src={getImage(image)} alt="wallpaper" className={cl.wallpaperImage}/>
                <div className={cl.wallpaperDark}/>
            </div>
            <div className={cl.content}>
                <H5 className={cl.contentAuthor}>{course.author.username}</H5>
                <H1 className={cl.contentTitle}>{course.title}</H1>
                <div className={cl.contentNavigations}>
                    {course.status_progress !== null
                        ? <ButtonContinue to={learnPageURL} className={cl.contentNavigationsButton}/>
                        : <ButtonFree to={learnPageURL} path={course.path} className={cl.contentNavigationsButton}/>
                    }
                    <ButtonAdd addedCollections={addedCollections} path={course.path} className={cl.contentNavigationsButton}/>
                </div>
                <div className={cl.contentInfo}>
                    {info.map(item =>
                        <MainInfoItem key={item.id} title={item.title}
                                      image={item.image} description={item.description} className={cl.contentInfoItem}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainCoursePart;