import {findEntities} from "../../../core/services/findEntities";

export function findImageEntities(contentBlock, callback, contentState) {
    findEntities('IMAGE', contentBlock, callback, contentState)
}