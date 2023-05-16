import {Map} from "immutable";
import {DefaultDraftBlockRenderMap} from "draft-js";
import h1SVG from '../../../../../../../../../core/static/img/h1.svg'
import h2SVG from '../../../../../../../../../core/static/img/h2.svg'
import h3SVG from '../../../../../../../../../core/static/img/h3.svg'
import h4SVG from '../../../../../../../../../core/static/img/h4.svg'
import h5SVG from '../../../../../../../../../core/static/img/h5.svg'
import h6SVG from '../../../../../../../../../core/static/img/h6.svg'
import textSVG from '../../../../../../../../../core/static/img/text.svg'

export const INLINE_STYLES = [
    { label: 'B', title: 'BOLD', style: 'bold' },
    { label: 'i', title: 'ITALIC', style: 'italic' },
    { label: 'U', title: 'UNDERLINE', style: 'underline' },
    { label: 'H', title: 'HIGHLIGHT', style: 'highlight' },
];

export const BlockType = {
    /* Заголовки */
    default: "unstyled",
    h1: 'header-one',
    h2: "header-two",
    h3: "header-three",
    h4: "header-four",
    h5: "header-five",
    h6: "header-six",
    blockquote: "blockquote",
    code: "code-block",
    list: "unordered-list-item",
    orderList: "ordered-list-item",
    img: "image",
}

export const BLOCK_LABELS = {
    [BlockType.default]: {
        image: textSVG,
        title: "Текст"
    },
    [BlockType.h1]: {
        image: h1SVG,
        title: "Заголовок 1"
    },
    [BlockType.h2]: {
        image: h2SVG,
        title:"Заголовок 2",
    },
    [BlockType.h3]: {
        image: h3SVG,
        title:"Заголовок 3",
    },
    [BlockType.h4]: {
        image: h4SVG,
        title:"Заголовок 4",
    },
    [BlockType.h5]: {
        image: h5SVG,
        title:"Заголовок 5",
    },
    [BlockType.h6]: {
        image: h6SVG,
        title:"Заголовок 6",
    },
    [BlockType.blockquote]: "Цитата",
    [BlockType.code]: "Блок с кодом",
    [BlockType.list]: "Маркированный список",
    [BlockType.orderList]: "Нумерованный список",
    [BlockType.img]: "Изображение",
    // [BlockType.cite]: "Сноска",
};


export const RenderMap = new Map(BlockType).merge(DefaultDraftBlockRenderMap);