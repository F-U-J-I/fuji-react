import React, {useState} from 'react';
import CardList from "../../core/components/list/CardList";
import {getStepText} from "../../../../../../../../../core/service/declension";
import {getImage} from "../../../../../../../../../core/api/mainAPI";
import CardListItem from "../../core/components/item/CardListItem";
import cl from "./_LessonCardList.module.scss";

const LessonCardList = ({list, className, ...props}) => {
    const getStep = (count) => {
        if (count === 0)
            return 'Нет шагов'
        return `${count} ${getStepText(count)}`
    }
    return (
        <CardList title='Уроки' className={className} {...props}>
            {list.map(item =>
                <CardListItem to={`${item.path}/${item.current_step}`}
                              key={item.path}
                              image={getImage(item.image_url)}
                              title={item.title}
                              progress={item.progress}
                              description={getStep(item.count_step)}
                              className={cl.card}
                              classNameProgressBar={cl.progressBar}
                              {...props} />
            )}
        </CardList>
    );
};

export default LessonCardList;