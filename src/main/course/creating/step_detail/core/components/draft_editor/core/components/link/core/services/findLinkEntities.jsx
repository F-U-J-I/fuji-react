import {findEntities} from "../../../core/services/findEntities";

export function findLinkEntities(contentBlock, callback, contentState) {
    findEntities('LINK', contentBlock, callback, contentState)
}