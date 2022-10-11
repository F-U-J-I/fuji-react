// export const BASE_URL = 'http://dmakger.beget.tech';
export const BASE_URL = 'http://127.0.0.1:8000';
export const BASE_URL_API = `${BASE_URL}/api`;
export const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export function isLogin() {
    return sessionStorage.getItem('access') !== null;
}

// Получение заголовков для запросов
export function getHeaders() {
    if (sessionStorage.getItem('access'))
        return {
            ...HEADERS,
            'Authorization': `Bearer ${sessionStorage.getItem('access')}`
        }
    return HEADERS
}

// Сохраняет переданные данные в сессию (sessionStorage)
export function save(key, value) {
    sessionStorage.setItem(key, value);
}

export function getImage(src) {
    return `${BASE_URL}${src}`
}

export function requestGET(url) {
    return request('GET', url)
}

export async function request(method, url, body) {
    const res = await fetch(url, {
        method: method,
        credentials: 'include',
        headers: getHeaders(),
        body: body
    })
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject();
}