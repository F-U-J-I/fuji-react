import {BASE_URL_API, getURL, request} from "../../../core/api/mainAPI";

export const COURSE_URL_API = `${BASE_URL_API}/courses`

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