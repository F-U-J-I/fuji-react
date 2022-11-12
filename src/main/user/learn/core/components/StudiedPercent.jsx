import React from 'react';
import cl from './_StudiedPercent.module.scss'
import Text16M from "../../../../../core/ui/text/16/medium/Text16M";
import LinkPurple from "../../../../../core/ui/link/purple/LinkPurple";
import H1 from "../../../../../core/ui/title/H1/H1";
import H4 from "../../../../../core/ui/title/H4/H4";

const getCourseText = (count) => {
    // 11..19; x5..x9; x0
    if ((count > 10 && count < 20) || (count % 10 > 4 || count % 10 === 0))
        return `курсов`
    // x1, (кроме 11..19)
    else if (count % 10 === 1)
        return `курс`
    // other
    return `курса`
}

const StudiedPercent = ({studyingQuantity, studiedQuantity, percent, toProcess, toComplete, className, ...props}) => {
    const ONE_PERCENT = 3.6;
    const deg = 90 + ONE_PERCENT * (percent - 50)

    const getStyle = () => {
        if (percent > 50)
            return {backgroundImage: `linear-gradient(${deg}deg, transparent 50%, #7B61FF 50%),` +
                    "linear-gradient(90deg, #FFF 50%, #7B61FF 50%)"}
        return {backgroundImage: `linear-gradient(${deg}deg, #FFF 50%, transparent 50%),` +
                "linear-gradient(90deg, #FFF 50%, #7B61FF 50%)"}
    }

    return (
        <div className={[className, cl.block].join(" ")} {...props}>
            <pre className={cl.studying}>
                <Text16M>Изучается </Text16M>
                <LinkPurple to={toProcess}>{studyingQuantity} {getCourseText(studyingQuantity)}</LinkPurple>
            </pre>
            <div className={cl.oval} style={getStyle()}>
                <div className={cl.percent}>
                    <H1>{percent}%</H1>
                </div>
            </div>
            <div className={cl.studied}>
                <H4 className={cl.studiedTitle}>Процент прохождения курсов</H4>
                <pre>
                    <Text16M className={cl.studiedDescription}>(Завершено <LinkPurple to={toComplete}>{studiedQuantity} {getCourseText(studiedQuantity)}</LinkPurple>)</Text16M>
                </pre>
            </div>
        </div>
    );
};

export default StudiedPercent;