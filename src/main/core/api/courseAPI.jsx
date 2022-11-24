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


// COURSE PAGE
export async function getPageCourse(path){
    const url = `${COURSE_URL_API}/page/${path}/`
    return await request('GET', url)
}


// GRADE
export async function createGradeCourse(path, grade){
    const url = `${COURSE_URL_API}/create/grade/${path}/`
    const body = JSON.stringify({grade: grade})
    return await request('POST', url, body)
}

export async function updateGradeCourse(path, grade){
    const url = `${COURSE_URL_API}/update/grade/${path}/`
    const body = JSON.stringify({grade: grade})
    return await request('PUT', url, body)
}

export async function deleteGradeCourse(path){
    const url = `${COURSE_URL_API}/delete/grade/${path}/`
    return await request('DELETE', url)
}

// CREATE
export async function createCourse(title){
    const url = `${COURSE_URL_API}/create/`
    const body = JSON.stringify({title: title})
    return await request('POST', url, body)
}

export async function getTitleCourse(path){
    const url = `${COURSE_URL_API}/learn/${path}/title/`
    return await request('GET', url)
}


// THEME
export async function getThemesCourse(path){
    const url = `${COURSE_URL_API}/learn/${path}/themes/`
    return await request('GET', url)
}

export async function createTheme(pathCourse){
    const url = `${COURSE_URL_API}/creating/${pathCourse}/create/theme/`
    return await request('POST', url)
}

export async function updateTheme(pathCourse, pathTheme, body){
    const url = `${COURSE_URL_API}/creating/${pathCourse}/update/theme/${pathTheme}/`
    const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('access')}`
    }
    return await request('PUT', url, body, headers)
}

export async function deleteTheme(pathCourse, pathTheme){
    const url = `${COURSE_URL_API}/creating/${pathCourse}/delete/theme/${pathTheme}/`
    return await request('DELETE', url)
}


// PUBLISH | DEVELOPMENT
export async function publishCourse(path){
    const url = `${COURSE_URL_API}/publish/${path}/`
    return await request('POST', url)
}

export async function developCourse(path){
    const url = `${COURSE_URL_API}/development/${path}/`
    return await request('POST', url)
}

export async function getPublishStatusCourse(path){
    const url = `${COURSE_URL_API}/publish-status/${path}/`
    return await request('GET', url)
}

// LEARN
export async function startLearnCourse(path){
    const url = `${COURSE_URL_API}/start-learn/${path}/`
    return await request('POST', url)
}