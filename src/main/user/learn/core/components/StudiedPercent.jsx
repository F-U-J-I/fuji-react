import React from 'react';
import cl from './_StudiedPercent.module.scss'
import Text16M from "../../../../../core/ui/text/16/medium/Text16M";
import LinkPurple from "../../../../../core/ui/link/purple/LinkPurple";
import H1 from "../../../../../core/ui/title/H1/H1";
import H5 from "../../../../../core/ui/title/H5/H5";
import {getCourseText} from "../../../../../core/service/declension";

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
                <H5 className={cl.studiedTitle}>Процент прохождения курсов</H5>
                <pre>
                    <Text16M className={cl.studiedDescription}>(Завершено <LinkPurple to={toComplete}>{studiedQuantity} {getCourseText(studiedQuantity)}</LinkPurple>)</Text16M>
                </pre>
            </div>
        </div>
    );
};

export default StudiedPercent;