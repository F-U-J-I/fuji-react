export const getText = (count, v1, v2, v3) => {
    // 11..19; x5..x9; x0
    if ((count > 10 && count < 20) || (count % 10 > 4 || count % 10 === 0))
        return v1
    // x1, (кроме 11..19)
    else if (count % 10 === 1)
        return v2
    // x2..x5, (кроме 11..19)
    return v3
}

export const getCourseText = (count) => {
    return getText(count, `курсов`, `курс`, `курса`)
}

export const getCollectionText = (count) => {
    return getText(count, `подборок`, `подборка`, `подборки`)
}

export const getInCollectionText = (count) => {
    return getText(count, `подборках`, `подборке`, `подборках`)
}

export const getFeedbackText = (count) => {
    return getText(count, `отзывов`, `отзыв`, `отзыва`)
}

export const getStudentText = (count) => {
    return getText(count, `учащихся`, `учащийся`, `учащихся`)
}

export const getLessonText = (count) => {
    return getText(count, `уроков`, `урок`, `урока`)
}