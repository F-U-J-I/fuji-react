import {BASE_URL_API, getParams, request} from "../../../core/api/mainAPI";

export const USER_URL_API = `${BASE_URL_API}/profiles`


export async function getProfiles(params) {
    const url = `${USER_URL_API}/${getParams(params)}`
    return await request('GET', url)
}

export async function getMiniProfiles(params) {
    const url = `${USER_URL_API}/mini/${getParams(params)}`
    return await request('GET', url)
}

export async function getHeaderUser(path){
    const url = `${USER_URL_API}/${path}/header/`
    return await request('GET', url)
}

export async function getStudyingCourses(path, limit){
    let url = `${USER_URL_API}/${path}/studying/courses/?ordering=date_added`
    if (limit !== undefined)
        url += `&limit=${limit}`
    return await request('GET', url)
}

export async function getStudiedCourses(path, limit){
    let url = `${USER_URL_API}/${path}/studied/courses/?ordering=date_added`
    if (limit !== undefined)
        url += `&limit=${limit}`
    return await request('GET', url)
}

export async function getStudiedPercent(path){
    let url = `${USER_URL_API}/${path}/study-percent/`
    return await request('GET', url)
}

// SUBSCRIBE
export async function subscribeUser(path){
    let url = `${USER_URL_API}/${path}/create/subscription/`
    return await request('POST', url)
}

export async function unsubscribeUser(path){
    let url = `${USER_URL_API}/${path}/delete/subscription/`
    return await request('DELETE', url)
}