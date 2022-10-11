import {BASE_URL_API, request} from "../../../core/api/mainAPI";

const COLLECTION_URL_API = `${BASE_URL_API}/collections`

export async function getCollectionProfile(limit){
    let url = `${COLLECTION_URL_API}/all/${sessionStorage.getItem('path')}`
    if (limit !== undefined)
        url += `/?limit=${limit}`
    return await request('GET', url)
}

// Создание подборки
export async function createCollection(){
    const url = `${COLLECTION_URL_API}/create/`
    return await request('POST', url)
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