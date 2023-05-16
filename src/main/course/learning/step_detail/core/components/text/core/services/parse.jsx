import Paragraph from "../../paragraph/Paragraph";
import H1Editable from "../../h/h1/H1Editable";
import H2Editable from "../../h/h2/H2Editable";
import H3Editable from "../../h/h3/H3Editable";
import {getImage} from "../../../../../../../../../core/api/mainAPI";
import {renderToString} from "react-dom/server";
import Image from "../../image/Image";

class Parse {
    constructor() {
        this.state = {
            data: [],
            HEADER_TAGS: ['h1', 'h2', 'h3'],
            ITALIC_TAGS: ['i', 'em'],
            BOLD_TAGS: ['b', 'strong'],
            IMAGE_TAG: 'img',
            id: 0,
        }
    }

    parse = (content) => {
        for (let item of content)
            this.state.data.push(this.parseObjectContent(item))
        // console.log(this.state.data)
        // return renderToString(this.state.data)
        return this.state.data
    }

    parseObjectContent = (data) => {
        this.setId(this.state.id + 1)

        if (data.text !== undefined)
            return this.getTag(data)

        else if (data.content !== undefined) {
            const dataList = {
                tag: data.tag,
                content: [],
            }
            for (const el of data.content) {
                dataList.content.push(this.parseObjectContent(el))
            }
            return this.getTag(dataList)
        }

        return this.getTag(data)
    }

    setId = (newId) => {
        this.state.id = newId
    }

    getKey = (tag) => {
        if (!tag)
            return `${this.state.id}-${this.state.id}`
        return `${tag}-${this.state.id}`
    }

    getTag = (content) => {
        const params = this.getParams(content.tag)
        if (content.tag === this.state.IMAGE_TAG)
            return this.getImage(content, params)
        return this.getText(content, params)
    }

    getText = (content, params) => {
        const data = this.getDataText(content)
        if (content.tag === 'p')
            return <Paragraph onChange={this.onChange} {...params}>{renderToString(data)}</Paragraph>
            // return data
        else if (this.state.ITALIC_TAGS.indexOf(content.tag) !== -1)
            return <em {...params}>{data}</em>
        else if (this.state.BOLD_TAGS.indexOf(content.tag) !== -1)
            return <strong {...params}>{data}</strong>

        else if (content.tag === 'h1')
            return <H1Editable {...params}>{data}</H1Editable>
        else if (content.tag === 'h2')
            return <H2Editable {...params}>{data}</H2Editable>
        else if (content.tag === 'h3')
            return <H3Editable {...params}>{data}</H3Editable>

        return data
    }

    getDataText = (data) => {
        if (data.text !== undefined)
            return data.text
        else if (data.content !== undefined)
            return data.content
        return data
    }

    getImage = (image, params) => {
        return <Image src={getImage(image.src)} {...params} alt="fuji-img"/>
    }

    getParams = (tag) => {
        return {
            key: this.getKey(tag),
            onInput: e => this.onChange(e.target.value)
        }
    }

    onChange = (value) => {
        console.log(value)
    }
}

export default Parse;
