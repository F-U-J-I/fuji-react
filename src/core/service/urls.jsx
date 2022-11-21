export const COURSE_URL = '/courses';
export const COLLECTION_URL = '/collections';
export const USER_URL = '/users';

// SEARCH
export const SEARCH_URL = '/search';
export const SEARCH_COURSES_URL = `${SEARCH_URL}${COURSE_URL}`;
export const SEARCH_COLLECTIONS_URL = `${SEARCH_URL}${COLLECTION_URL}`;
export const SEARCH_USERS_URL = `${SEARCH_URL}${USER_URL}`;

// COURSES
export const getCoursePageURL = (path) => {
    return `${COURSE_URL}/${path}/page`;
}