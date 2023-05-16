import React, {useState} from 'react';
import CardList from "../../core/components/list/CardList";
import {getLessonText} from "../../../../../../../../../core/service/declension";
import {getImage} from "../../../../../../../../../core/api/mainAPI";
import cl from './_ThemeCardList.module.scss'
import CardListItem from "../../core/components/item/CardListItem";

const ThemeCardList = ({list, className, ...props}) => {
    const getLessons = (count) => {
        if (count === 0)
            return 'Нет уроков'
        return `${count} ${getLessonText(count)}`
    }
    return (
        <CardList title='Темы' className={className} {...props}>
            {list.map(item =>
                <CardListItem to={`${item.path}/`}
                              key={item.path}
                              image={getImage(item.image_url)}
                              title={item.title}
                              progress={item.progress}
                              description={getLessons(item.count_lesson)}
                              className={cl.card}
                              classNameProgressBar={cl.progressBar}
                              {...props} />
            )}
        </CardList>
    );
};

export default ThemeCardList;