import {SEARCH_URL, SEARCH_COLLECTIONS_URL, SEARCH_COURSES_URL, SEARCH_USERS_URL} from "./urls";

export const addList = (item, list) => {
    return [item, ...list]
}

export const removeList = (item, list) => {
    const listCopy = [...list]
    const index = listCopy.indexOf(item)
    listCopy.splice(index, 1)
    return listCopy
}

export const filterStateModalList = [
    {title: 'Всё', id: 'all'},
    {title: 'Добавленные', id: 'added'},
    {title: 'Свои', id: 'my'}
]
export const sortStateModalList = [
    {title: 'По дате добавления', id: '1'},
    {title: 'По рейтингу', id: '2'},
    {title: 'По алфавиту', id: '3'},
]

export const allId = 1;
export const courseId = 2;
export const collectionId = 3;
export const userId = 4;

export const menuList = [
    {title: 'Всё', to: SEARCH_URL, id: allId},
    {title: 'Курсы', to: SEARCH_COURSES_URL, id: courseId},
    {title: 'Подборки', to: SEARCH_COLLECTIONS_URL, id: collectionId},
    {title: 'Пользователи', to: SEARCH_USERS_URL, id: userId},
]