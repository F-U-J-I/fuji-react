import React from 'react';
import cl from './_CourseMiniActive.module.scss'
import clCommon from '../_CourseMiniCommon.module.scss'
import {Link} from "react-router-dom";

import starSVG from "../../../../../../static/img/star-fill-yellow.svg";
import userSVG from "../../../../../../static/img/user-outline-white.svg";
import watchSVG from "../../../../../../static/img/watch-outline-white.svg";

import {getNumber, getWatch} from "../../../../../../service/number";
import {COURSE_URL} from "../../../../../../service/urls";
import H3 from "../../../../../../ui/title/H3/H3";
import Text14 from "../../../../../../ui/text/14/Text14";
import Text16Book from "../../../../../../ui/text/16/book/Text16Book";
import MainInfoItem from "../main-info-item/MainInfoItem";
import PriceCourse from "../../../../core/components/price/PriceCourse";


const CourseMiniActive = ({course, className, ...props}) => {
    const info = [
        {
            id: 0,
            image: starSVG,
            title: course.rating
            // title: 4.5
        },
        {
            id: 1,
            image: userSVG,
            title: getNumber(course.members_amount)
            // title: getNumber(100000)
        },
        {
            id: 2,
            image: watchSVG,
            title: getWatch(course.duration_in_minutes) + 'ч'
            // title: getWatch(10000) + 'h'
        },
    ]

    const existsDescription = course.description.length > 0

    return (
        <Link to={`${COURSE_URL}/${course.path}`}
              className={[cl.course, clCommon.course, existsDescription ? '' : cl.empty, className].join(" ")} {...props}>
            <Text14 className={[cl.author, clCommon.author].join(" ")}>{course.author.username}</Text14>
            <H3 className={[cl.title, clCommon.title].join(" ")}>{course.title}</H3>
            <Text16Book className={cl.description}>{course.description}</Text16Book>

            <div className={[clCommon.mainInfo, cl.mainInfo].join(" ")}>
                {info.map(item =>
                    <MainInfoItem key={item.id} image={item.image} title={item.title}/>
                )}
            </div>

            <div className={[clCommon.otherInfo, cl.otherInfo].join(" ")}>
                {course.status_progress === null
                    ? <PriceCourse price={course.price} className={clCommon.price}/>
                    : <p>{course.status_progress}</p>
                }
            </div>
        </Link>
    );
};

export default CourseMiniActive;