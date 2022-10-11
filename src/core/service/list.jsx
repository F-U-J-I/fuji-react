export const addList = (item, list) => {
    return [item, ...list]
}

export const removeList = (item, list) => {
    const listCopy = [...list]
    const index = listCopy.indexOf(item)
    listCopy.splice(index, 1)
    return listCopy
}