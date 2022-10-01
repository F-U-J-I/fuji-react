import {BASE_URL_API, getHeaders} from "../../../core/api/mainAPI";

const COLLECTION_URL_API = `${BASE_URL_API}/collections`

export async function getCollectionProfile(limit){
    let url = `${COLLECTION_URL_API}/all/${sessionStorage.getItem('path')}`
    if (limit !== undefined)
        url += `/?limit=${limit}`
    const res = await fetch(url, {
    // const res = await fetch(`${COLLECTION_URL_API}/all/${sessionStorage.getItem('path')}`, {
        method: 'GET',
        credentials: 'include',
        headers: getHeaders(),
    })
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject();
}

export async function createCollection(){
    const res = await fetch(`${COLLECTION_URL_API}/create/`, {
        method: 'POST',
        credentials: 'include',
        headers: getHeaders(),
    })
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject();
}

export async function getCatalog() {
    const res = await fetch(`${COLLECTION_URL_API}/catalog/?ordering=-rating`, {
        method: 'GET',
        credentials: 'include',
        headers: getHeaders(),
    })
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject();
}

export async function getCollection(path) {
    const res = await fetch(`${COLLECTION_URL_API}/get/${path}/`, {
        method: 'GET',
        credentials: 'include',
        headers: getHeaders(),
    })
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject();
}

// ADD and POP collections
export async function addCollection(path) {
    const res = await fetch(`${COLLECTION_URL_API}/add/${path}/`, {
        method: 'POST',
        credentials: 'include',
        headers: getHeaders(),
    })
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject();
}

export async function popCollection(path) {
    const res = await fetch(`${COLLECTION_URL_API}/pop/${path}/`, {
        method: 'DELETE',
        credentials: 'include',
        headers: getHeaders(),
    })
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject();
}