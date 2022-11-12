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
    {name: 'Всё', id: 'all'},
    {name: 'Добавленные', id: 'added'},
    {name: 'Свои', id: 'my'}
]
export const sortStateModalList = [
    {name: 'По дате добавления', id: '1'},
    {name: 'По рейтингу', id: '2'},
    {name: 'По алфавиту', id: '3'},
]

export const filterModalList = [
    {name: 'Всё', id: 'all'},
    {name: 'Курсы', id: 'course'},
    {name: 'Подборки', id: 'collection'},
    {name: 'Пользователи', id: 'user'},
]