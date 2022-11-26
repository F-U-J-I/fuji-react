export const getIndex = (list, path) => {
    for (let i = 0; i !== list.length; i++)
        if (list[i].path === path)
            return i
    return -1
}