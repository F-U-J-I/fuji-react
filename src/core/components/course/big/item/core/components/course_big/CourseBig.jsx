import React from 'react';
import cl from './_CourseBig.module.scss'
import {Link} from "react-router-dom";
import {getImage} from "../../../../../../../api/mainAPI";
import H4 from "../../../../../../../ui/title/H4/H4";
import Text14M from "../../../../../../../ui/text/14/medium/Text14M";
import Text16Book from "../../../../../../../ui/text/16/book/Text16Book";
import {getCoursePageURL, USER_URL} from "../../../../../../../service/urls";
import Text16M from "../../../../../../../ui/text/16/medium/Text16M";
import {getInfoList} from "../../../../../core/service";
import MainInfoItem from "../../../../../core/components/main-info-item/MainInfoItem";
import PriceCourse from "../../../../../core/components/price/PriceCourse";
import ProgressCourseBig from "../../../../../core/components/progress/big/ProgressCourseBig";

const CourseBig = ({course, to, className, ...props}) => {
    // console.log(course)
    const courseURL = getCoursePageURL(course.path)
    const userURL = `${USER_URL}/${course.author.path}`
    const infoList = getInfoList(course.rating, course.members_amount, course.duration_in_minutes)
    return (
        <Link to={courseURL} className={[cl.course, className].join(" ")} {...props}>
            <img src={getImage(course.image_url)} alt='preview' className={cl.preview}/>
            <div className={cl.content}>
                <H4 className={cl.title}>{course.title}</H4>

                <Link to={userURL} className={cl.author}>
                    <img src={getImage(course.author.avatar_url)} alt='author' className={cl.authorImage}/>
                    <Text14M className={cl.authorName}>{course.author.username}</Text14M>
                </Link>

                {course.description
                    ? (<Text16Book className={cl.description}>{course.description}</Text16Book>)
                    : (<Text16M className={[cl.description, cl.withoutDescription].join(" ")}>Нет описания</Text16M>)
                }

                <div className={cl.info}>
                    <div className={cl.mainInfoList}>
                        {infoList.map(item =>
                            <MainInfoItem key={item.id} image={item.image} title={item.title}/>
                        )}
                    </div>

                    <div className={cl.otherInfo}>
                        {course.status_progress === null
                            ? <PriceCourse price={course.price} className={cl.price}/>
                            : <ProgressCourseBig progress={course.progress.progress}
                                                 maxProgress={course.progress.max_progress} className={cl.progress}/>
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CourseBig;