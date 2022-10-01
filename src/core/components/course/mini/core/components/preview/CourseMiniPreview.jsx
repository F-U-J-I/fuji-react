import React from 'react';
import {Link} from "react-router-dom";
import cl from "./_CourseMiniPreview.module.scss";
import clCommon from "../_CourseMiniCommon.module.scss";

import H3 from "../../../../../../ui/title/H3/H3";
import Text14 from "../../../../../../ui/text/14/Text14";
import PriceCourse from "../../../../core/components/price/PriceCourse";
import MainInfoItem from "../main-info-item/MainInfoItem";

import {getImage} from "../../../../../../api/mainAPI";
import {getNumber, getWatch} from "../../../../../../service/number";
import {COURSE_URL} from "../../../../../../service/urls";
import starSVG from "../../../../../../static/img/star-fill-yellow.svg";
import userSVG from "../../../../../../static/img/user-outline-white.svg";
import watchSVG from "../../../../../../static/img/watch-outline-white.svg";
import ProgressCourse from "../../../../core/components/progress/ProgressCourse";

const CourseMiniPreview = ({course, className, ...props}) => {
    const image = getImage(course.image_url)
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

    return (
        <Link to={`${COURSE_URL}/${course.path}`} className={[clCommon.course, cl.course, className].join(" ")} {...props}>
            <div className={cl.titleInfo}>
                <div className={cl.titleInfoImage}>
                    <img className={cl.titleInfoImageSelf} src={image} alt='preview'/>
                    <div className={cl.titleInfoImageDark} />
                </div>
                <div className={cl.titleInfoText}>
                    <H3 className={[cl.titleInfoTextTitle, clCommon.title].join(" ")}>{course.title}</H3>
                    <Text14 className={[cl.titleInfoTextAuthor, clCommon.author].join(" ")}>{course.author.username}</Text14>
                </div>
            </div>
            <div className={cl.info}>
                <div className={clCommon.mainInfo}>
                    {info.map(item =>
                        <MainInfoItem key={item.id} image={item.image} title={item.title} />
                    )}
                </div>
                <div className={clCommon.otherInfo}>
                    {course.status_progress === null
                        ? <PriceCourse price={course.price} className={clCommon.price}/>
                        : <ProgressCourse progress={course.progress.progress} maxProgress={course.progress.max_progress}/>
                    }
                </div>
            </div>
        </Link>
    );
};

export default CourseMiniPreview;