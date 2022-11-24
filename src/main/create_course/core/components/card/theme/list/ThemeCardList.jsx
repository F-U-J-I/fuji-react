import React, {useState} from 'react';
import ThemeEditListItem from "../edit/ThemeEditListItem";
import {getImage} from "../../../../../../../core/api/mainAPI";
import CardList from "../../core/components/list/CardList";
import {getLessonText} from "../../../../../../../core/service/declension";
import ThemeCreate from "../create/ThemeCreate";

const ThemeCardList = ({coursePath, list, ...props}) => {
    const [themeList, setThemeList] = useState(list)
    const getLessons = (count) => {
        if (count === 0)
            return 'Нет уроков'
        return `${count} ${getLessonText(count)}`
    }

    return (
        <CardList title='Темы' {...props}>
            {themeList.map(item =>
                <ThemeEditListItem to={`#`}
                                   pathCourse={coursePath}
                                   pathTheme={item.path}
                                   key={item.path}
                                   image={getImage(item.image_url)}
                                   title={item.title}
                                   description={getLessons(item.count_lesson)}
                                   list={themeList}
                                   setList={setThemeList} />
            )}
            <ThemeCreate path={coursePath}
                         list={themeList}
                         setList={setThemeList} />
        </CardList>
    );
};

export default ThemeCardList;