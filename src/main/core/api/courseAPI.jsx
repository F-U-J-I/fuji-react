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

export async function getPageCourse(path){
    const url = `${COURSE_URL_API}/page/${path}/`
    return await request('GET', url)
}

export async function updatePageCourse(path, body){
    const url = `${COURSE_URL_API}/creating/${path}/update/page/course/`
    const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('access')}`
    }
    return await request('PUT', url, body, headers)
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

// COURSE
export async function getTitleCourse(path){
    const url = `${COURSE_URL_API}/learn/${path}/title/`
    return await request('GET', url)
}

export async function createCourse(title){
    const url = `${COURSE_URL_API}/create/`
    const body = JSON.stringify({title: title})
    return await request('POST', url, body)
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

export async function getTitleTheme(pathCourse, pathTheme){
    const url = `${COURSE_URL_API}/learn/${pathCourse}/themes/${pathTheme}/title/`
    return await request('GET', url)
}


// LESSON
export async function getLessonsCourse(pathCourse, pathTheme){
    const url = `${COURSE_URL_API}/learn/${pathCourse}/themes/${pathTheme}/lessons/`
    return await request('GET', url)
}

export async function createLesson(pathCourse, pathTheme){
    const url = `${COURSE_URL_API}/creating/${pathCourse}/theme/${pathTheme}/create/lesson/`
    return await request('POST', url)
}

export async function updateLesson(pathCourse, pathTheme, pathLesson, body){
    const url = `${COURSE_URL_API}/creating/${pathCourse}/theme/${pathTheme}/update/lesson/${pathLesson}/`
    const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('access')}`
    }
    return await request('PUT', url, body, headers)
}

export async function deleteLesson(pathCourse, pathTheme, pathLesson){
    const url = `${COURSE_URL_API}/creating/${pathCourse}/theme/${pathTheme}/delete/lesson/${pathLesson}/`
    return await request('DELETE', url)
}


// STEP

export async function createStep(pathCourse, pathTheme, pathLesson){
    const url = `${COURSE_URL_API}/creating/${pathCourse}/theme/${pathTheme}/lesson/${pathLesson}/create/step/`
    return await request('POST', url)
}

export async function updateStep(pathCourse, pathTheme, pathLesson, pathStep, body){
    const url = `${COURSE_URL_API}/creating/${pathCourse}/theme/${pathTheme}/lesson/${pathLesson}/update/step/${pathStep}/`
    const bodyJSON = JSON.stringify(body)
    console.log(bodyJSON)
    return await request('PUT', url, bodyJSON)
}

export async function deleteStep(pathCourse, pathTheme, pathLesson, pathStep){
    const url = `${COURSE_URL_API}/creating/${pathCourse}/theme/${pathTheme}/lesson/${pathLesson}/delete/step/${pathStep}/`
    return await request('DELETE', url)
}

export async function getStepList(pathCourse, pathTheme, pathLesson, pathStep){
    const url = `${COURSE_URL_API}/learn/${pathCourse}/themes/${pathTheme}/lessons/${pathLesson}/steps/${pathStep}/list/`
    return await request('GET', url)
}

export async function getStep(pathCourse, pathTheme, pathLesson, pathStep){
    const url = `${COURSE_URL_API}/learn/${pathCourse}/themes/${pathTheme}/lessons/${pathLesson}/steps/${pathStep}/`
    return await request('GET', url)
}

export async function getStepJSON(pathCourse, pathTheme, pathLesson, pathStep){
    const url = `${COURSE_URL_API}/learn/${pathCourse}/themes/${pathTheme}/lessons/${pathLesson}/steps-json/${pathStep}/`
    return await request('GET', url)
}

export async function completeStep(pathCourse, pathTheme, pathLesson, pathStep){
    const url = `${COURSE_URL_API}/learn/${pathCourse}/themes/${pathTheme}/lessons/${pathLesson}/steps/${pathStep}/complete/`
    return await request('PUT', url)
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

// START LEARN | COMPLETE LEARN
export async function startLearnCourse(path){
    const url = `${COURSE_URL_API}/start-learn/${path}/`
    return await request('POST', url)
}

export async function completeLearnCourse(path){
    const url = `${COURSE_URL_API}/complete-learn/${path}/`
    return await request('POST', url)
}

export async function getLearnStatusCourse(path){
    const url = `${COURSE_URL_API}/learn-status/${path}/`
    return await request('GET', url)
}
