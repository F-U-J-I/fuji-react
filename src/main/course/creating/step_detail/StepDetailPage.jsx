import React, {Component} from 'react';
import cl from './_StepDetailPage.module.scss'
import {StepCreateCourseWrapperContext} from "./core/wrapper/core/context/StepCreateCourseWrapperContext";
import {getStepJSON} from "../../../core/api/courseAPI";
import {withParams} from "../../../../core/service/params";
import {getError} from "../../../../core/service/error";
import {getImage} from "../../../../core/api/mainAPI";
import Parse from "./core/components/text/core/services/parse";

class StepDetailPage extends Component {
    static contextType = StepCreateCourseWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            imageTheme: null,
            toBack: `./../`,
            content: '',
            indexCurrentParagraph: -1,
            currentParagraph: null,
            step: null,

            isLoad: false,
            error: null,
        }
    }

    componentDidMount() {
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.pathStep !== this.props.params.pathStep){
            this._setData()
        }
    }

    _setData() {
        this._setStep()
    }
    _setStep() {
        const {path, pathTheme, pathLesson, pathStep} = this.props.params;
        getStepJSON(path, pathTheme, pathLesson, pathStep).then(
        // getStep(path, pathTheme, pathLesson, pathStep).then(
            r => {
                this.setState({
                    step: r,
                    // content: r.content,
                    content: new Parse().parse(r.content),
                })
                this.context.setTitle(r.title)
            },
            e => {this.setState({error: e.status})},
        ).finally(() => {
            console.log(this.state.content)
            this.setState({isLoad: true})
        })
    }

    _parseContent(content) {
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
                // linkImage += s[i]
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

    setContent = (newContent) => {
        console.log('setContent')
        let count = 0
        // console.log(newContent.currentTarget.innerText)
        const text = newContent.currentTarget.innerText
        let i = 0
        for (; i !== text.length; i++) {
            if (text[i] === '\n') {
                count += 1
                // console.log(text.substr(i-10, 20))
                i += 1
            }
            if (text[i] === '/'
                && (text[i-1] === '\n' || i === 0)
                && (text[i+1] === '\n' || i === text.length)) {
                console.log(true)
            }
        }
        console.log(count)
        // console.log(text[text.length - 1] === '\n')
        // console.log(text[text.length - 2] === '\n')
        // console.log(text[text.length - 3] === '\n')
        // this.state.content.map(item => console.log(item))
        // console.log(newContent)
        // console.log(newContent.target)
        // console.log(newContent.target.value)
        // console.log(newContent.currentTarget.innerText)
        // console.log(newContent.currentTarget.innerHTML)
        // console.log(this.state.content)
        // this.setState({content: newContent})
    }

    setCurrentParagraph = (value) => {
        console.log('setCurrentParagraph')
        console.log(value)
        this.setState({currentParagraph: value})
    }

    _setContent = (newContent) => {
        // this.setState({content: newContent})
        console.log(newContent)
        console.log(newContent.props)
        console.log(newContent.target.children)
        console.log(newContent.currentTarget)
        // console.log(newContent.children)
    }

    getContent = (content) => {
        // console.log(content.props.onChange)
        // content
        return content
    }

    render() {
        const {content, isLoad, error} = this.state;

        if (error)
            getError(error)

        let contentHTML = null;
        if (isLoad)
            contentHTML = (
                <div onInput={e => this._setContent(e)} className={cl.wrapper} contentEditable={true} suppressContentEditableWarning={true}>
                    {content.map(item =>
                        <div onChange={() => this.setCurrentParagraph(item)} key={item.key}>
                            {this.getContent(item)}
                        </div>
                    )}
                    {/*<EditableMain onChange={e => this.setContent(e.target.value)}>*/}
                    {/*    {content}*/}
                    {/*</EditableMain>*/}
                    {/*<ContentEditable html={content} className={cl.text} onChange={e => this.setContent(e.target.value)} />*/}
                </div>
            )


        return (
            <>
                {contentHTML}
            </>
        );
    }
}

export default withParams(StepDetailPage);