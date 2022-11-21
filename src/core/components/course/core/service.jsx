import starSVG from "../../../static/img/star-fill-yellow.svg";
import userSVG from "../../../static/img/user-outline-white.svg";
import {getNumber, getWatch} from "../../../service/number";
import watchSVG from "../../../static/img/watch-outline-white.svg";

export const getInfoList = (rating, membersAmount, durationInMinutes) => {
    return [
        {
            id: 0,
            image: starSVG,
            title: rating
            // title: 4.5
        },
        {
            id: 1,
            image: userSVG,
            title: getNumber(membersAmount)
            // title: getNumber(100000)
        },
        {
            id: 2,
            image: watchSVG,
            title: getWatch(durationInMinutes) + 'ч'
            // title: getWatch(10000) + 'h'
        },
    ]
}

export const getCurrentProgressPercent = (progress, max_progress) => {
    if ((progress !== 0) || (max_progress !== 0))
        return progress / max_progress * 100
    return 0
}