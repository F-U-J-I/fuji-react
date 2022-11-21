import {BASE_URL_API, getURL, request} from "../../../core/api/mainAPI";

export const COURSE_URL_API = `${BASE_URL_API}/courses`

export async function getCourses(params) {
    const url = getURL(`${COURSE_URL_API}/`, params)
    return await request('GET', url)
}

export async function getAllCoursesProfile(path, params) {
    const url = getURL(`${COURSE_URL_API}/all/${path}/`, params)
    return await request('GET', url)
}

export async function getAddedCourses(path, params){
    const url = getURL(`${COURSE_URL_API}/added/${path}/`, params)
    return await request('GET', url)
}

export async function getCreatedCourses(path, params){
    const url = getURL(`${COURSE_URL_API}/created/${path}/`, params)
    return await request('GET', url)
}

export async function getCollectionsWithCourses(path, params){
    const url = getURL(`${COURSE_URL_API}/added-collection/${path}/`, params)
    return await request('GET', url)
}

export async function getPageCourse(path){
    const url = `${COURSE_URL_API}/page/${path}/`
    return await request('GET', url)
}


// ADD COURSE IN COLLECTION

export async function addCourseInCollection(path, collectionPath, params){
    const url = getURL(`${COURSE_URL_API}/add/${path}/`, params)
    const body = JSON.stringify({collection_path: collectionPath})
    return await request('POST', url, body)
}

export async function popCourseInCollection(path, collectionPath, params){
    const url = getURL(`${COURSE_URL_API}/pop/${path}/`, params)
    const body = JSON.stringify({collection_path: collectionPath})
    return await request('DELETE', url, body)
}