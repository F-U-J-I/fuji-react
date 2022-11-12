import {BASE_URL_API, getURL, request} from "../../../core/api/mainAPI";

export const COLLECTION_URL_API = `${BASE_URL_API}/collections`

// Подборки пользователя
export async function getCollectionProfile(path, params){
    let pathLocal = path
    if (path === undefined)
        pathLocal = sessionStorage.getItem('path')
    const url = getURL(`${COLLECTION_URL_API}/all/${pathLocal}/`, params)
    return await request('GET', url)
}

// Добавленные подборки
export async function getAddedCollection(path, params){
    const url = getURL(`${COLLECTION_URL_API}/added/${path}/`, params)
    return await request('GET', url)
}

// Созданные подборки
export async function getCreatedCollection(path, params){
    const url = getURL(`${COLLECTION_URL_API}/created/${path}/`, params)
    return await request('GET', url)
}



// Создание подборки
export async function createCollection(){
    const url = `${COLLECTION_URL_API}/create/`
    return await request('POST', url)
}

export async function updateCollection(path, body){
    const url = `${COLLECTION_URL_API}/update/${path}/`
    const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('access')}`
    }
    return await request('PUT', url, body, headers)
}

export async function deleteCollection(path){
    const url = `${COLLECTION_URL_API}/delete/${path}`
    return await request('DELETE', url)
}



// Получить каталог
export async function getCatalog() {
    const url = `${COLLECTION_URL_API}/catalog/?ordering=-rating`
    return await request('GET', url)
}

// Получить определённую подборку
export async function getCollection(path) {
    const url = `${COLLECTION_URL_API}/get/${path}/`
    return await request('GET', url)
}

// ADD and POP collections
// ADD
export async function addCollection(path) {
    const url = `${COLLECTION_URL_API}/add/${path}/`
    return await request('POST', url)
}

// POP
export async function popCollection(path) {
    const url = `${COLLECTION_URL_API}/pop/${path}/`
    return await request('DELETE', url)
}



// CREATE | UPDATE | DELETE grade collections
// CREATE
export async function createGradeCollection(path, grade) {
    const url = `${COLLECTION_URL_API}/create/grade/${path}/`
    const body = JSON.stringify({
        grade: grade
    })
    return await request('POST', url, body)
}

// UPDATE
export async function updateGradeCollection(path, grade) {
    const url = `${COLLECTION_URL_API}/update/grade/${path}/`
    const body = JSON.stringify({
        grade: grade
    })
    return await request('PUT', url, body)
}

// DELETE
export async function deleteGradeCollection(path) {
    const url = `${COLLECTION_URL_API}/delete/grade/${path}/`
    return await request('DELETE', url)
}
