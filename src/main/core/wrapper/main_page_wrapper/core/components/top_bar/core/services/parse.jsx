import {getImage} from "../../../../../../../../../core/api/mainAPI";

export const parseContent = (content) => {
    let s = content;
    let inTag = false
    let inSrc = false
    let linkImage = ''

    let i = 0
    for (; i !== s.length; i++){
        if (s[i] === '<' && s.substr(i+1, 3) === 'img') {
            inTag = true
        }
        if (inTag) {
            if (s[i] === '"' && s.substr(i-4, 3) === 'src') {
                inSrc = true
                continue
            }
            if (s[i] === '>' && s.substr(i-1, 2) === '/>') {
                inTag = false
            }
        }

        if (inSrc) {
            if (s[i] === '"') {
                inSrc = false
                s = s.replace(linkImage, getImage(linkImage))
            }
            else
                linkImage += s[i]
        }
    }
    return s
}