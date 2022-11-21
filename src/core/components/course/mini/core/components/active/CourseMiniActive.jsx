import React from 'react';
import cl from './_CourseMiniActive.module.scss'
import clCommon from '../_CourseMiniCommon.module.scss'
import {Link} from "react-router-dom";

import {COURSE_URL} from "../../../../../../service/urls";
import H5 from "../../../../../../ui/title/H5/H5";
import Text14M from "../../../../../../ui/text/14/medium/Text14M";
import Text16Book from "../../../../../../ui/text/16/book/Text16Book";
import MainInfoItem from "../../../../core/components/main-info-item/MainInfoItem";
import PriceCourse from "../../../../core/components/price/PriceCourse";
import ProgressCourseMini from "../../../../core/components/progress/mini/ProgressCourseMini";
import {getInfoList} from "../../../../core/service";


const CourseMiniActive = ({course, className, ...props}) => {
    const info = getInfoList(course.rating, course.members_amount, course.duration_in_minutes)

    const existsDescription = course.description.length > 0
    // console.log(course)
    // console.log(course.status_progress)
    return (
        <Link to={`${COURSE_URL}/${course.path}`}
              className={[cl.course, clCommon.course, existsDescription ? '' : cl.empty, className].join(" ")} {...props}>
            <Text14M className={[cl.author, clCommon.author].join(" ")}>{course.author.username}</Text14M>
            <H5 className={[cl.title, clCommon.title].join(" ")}>{course.title}</H5>
            <Text16Book className={cl.description}>{course.description}</Text16Book>

            <div className={[clCommon.mainInfo, cl.mainInfo].join(" ")}>
                {info.map(item =>
                    <MainInfoItem key={item.id} image={item.image} title={item.title}/>
                )}
            </div>

            <div className={[clCommon.otherInfo, cl.otherInfo].join(" ")}>
                {course.status_progress === null
                    ? <PriceCourse price={course.price} className={clCommon.price}/>
                    : <ProgressCourseMini progress={course.progress.progress} maxProgress={course.progress.max_progress}/>
                }
            </div>
        </Link>
    );
};

export default CourseMiniActive;