

export function isMyCollection(authorPath) {
    return authorPath === sessionStorage.getItem('path')
}