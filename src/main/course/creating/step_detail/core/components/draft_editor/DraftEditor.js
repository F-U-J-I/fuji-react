import './core/scss/inline_styles/_InlineStyles.scss'
import './_DraftEditor.scss'
import cl from './_DraftEditor.module.scss'

import React, {Component} from 'react';
import isSoftNewlineEvent from 'draft-js/lib/isSoftNewlineEvent';
import {Map} from 'immutable';

import {
    CompositeDecorator,
    Editor,
    EditorState,
    RichUtils,
    convertToRaw
} from 'draft-js';

import {
    addNewBlockAt,
    getCurrentBlock,
    getSelectionRange,
    getSelectionCoords
} from './core/services';


import _map from 'lodash/map';

import converter from './core/services/converter';
import InlineToolbar from "./core/components/inline_toolbar/InlineToolbar";
import {defaultPlaceholder} from "../text/core/services/placeholder";
import {RenderMap} from "./core/services/config";
import BlockToolbar from "./core/components/block_toolbar/BlockToolbar";
import getDefaultKeyBinding from "draft-js/lib/getDefaultKeyBinding";
import ContentState from "draft-js/lib/ContentState";
import {convertFromHTML} from "draft-js";
import {findImageEntities} from "./core/components/image/core/services/findImageEntities";
import ImageEditor from "./core/components/image/ImageEditor";
import LinkEditor from "./core/components/link/LinkEditor";

const urlCreator = window.URL || window.webkitURL;

class DraftEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inlineToolbar: {show: false},
            blockToolbar: {show: false},
            editorState: this.getEditable(),
            // editorRef: React.createRef('editor'),
            editorRef: 'editor',
            // spellCheck: false,
        };

        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setLink = this.setLink.bind(this);
        this.handleDroppedFiles = this.handleDroppedFiles.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
        this.logMarkup = this.logMarkup.bind(this);

        this.focus = () => {
            this.refs.editor.focus()
        }
        this.getEditorState = () => this.state.editorState;

        this.logState = () => {
            console.log(
                'editor state ==> ',
                convertToRaw(this.state.editorState.getCurrentContent())
            );
        }
    }

    getEditable() {
        const decorator = new CompositeDecorator([
            {
                strategy: findLinkEntities,
                component: Link,
            },
            {
                strategy: findImageEntities,
                component: Image,
            },
        ]);

        if (this.props.value) {
            let editorState = EditorState.createWithContent(
                ContentState.createFromBlockArray(
                    convertFromHTML(this.props.value)
                )
            )
            return EditorState.set(editorState, {decorator: decorator})
        } else {
            return EditorState.createEmpty(decorator)
        }
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                editorState: this.getEditable()
            })
        }

    }

    onChange(editorState) {
        if (!editorState.getSelection().isCollapsed()) {
            const selectionRange = getSelectionRange();

            if (!selectionRange) {
                this.setState({inlineToolbar: {show: false}});

                return;
            }

            const selectionCoords = getSelectionCoords(selectionRange);

            this.setState({
                inlineToolbar: {
                    show: true,
                    position: {
                        top: selectionCoords.offsetTop,
                        left: selectionCoords.offsetLeft
                    }
                }
            });
        } else {
            this.setState({inlineToolbar: {show: false}});
        }

        // Показываем плашку с навигацией, если
        if (!this.props.isContentUpdated &&
            (editorState.getCurrentContent() !== this.state.editorState.getCurrentContent())) {
            this.props.setIsContentUpdated(true)
        }

        this.setState({editorState});
    }

    keyBindingFn = (e) => {
        // console.log('keyBindingFn', e)
        if (e.key === '/') {


            this.showBlockTypeWindow(e)
        } else if (this.state.blockToolbar.show) {
            this.setState({blockToolbar: {show: false}});
        }

        return getDefaultKeyBinding(e)
    }

    setLink() {
        const urlValue = prompt('Введите ссылку', '');
        const {editorState} = this.state;
        const contentState = editorState.getCurrentContent();

        const contentStateWithEntity = contentState.createEntity(
            'LINK',
            'IMMUTABLE',
            {url: urlValue}
        );

        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, {currentContent: contentStateWithEntity});

        this.setState({
            editorState: RichUtils.toggleLink(
                newEditorState,
                newEditorState.getSelection(),
                entityKey
            )
        }, () => {
            setTimeout(() => this.focus(), 0);
        });
    }

    toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
        this.setState({blockToolbar: {show: false}});

    }

    handleDroppedFiles(selection, files) {
        console.log('files ==>', files)
        const filteredFiles = files.filter(file => (file.type.indexOf('image/') === 0));

        if (!filteredFiles.length) {
            return 'not_handled';
        }

        this.onChange(addNewBlockAt(
            this.state.editorState,
            selection.getAnchorKey(),
            'SLIDER',
            new Map({slides: _map(files, file => ({url: urlCreator.createObjectURL(file)}))})
        ));

        return 'handled';
    }

    logMarkup() {
        const markup = converter(this.state.editorState.getCurrentContent());
        this.props.setContent(markup)

        // document.getElementById('js-markup-container').innerHTML = markup;
        // console.log('markup ==> ', markup);

    }

    showBlockTypeWindow() {
        let position = {
            top: null,
            left: null,
        }

        // console.log(currentBlock)
        // console.log(this.state.editorState.getCurrentContent().getBlockForKey(currentBlockKey))
        // const currentBlockIndex = this.state.editorState.getCurrentContent().getBlockMap()
        //     .keySeq().findIndex(k => k === currentBlockKey)
        // console.log(currentBlockIndex)

        const selectionRange = getSelectionRange()
        let rangeBounds = selectionRange.getBoundingClientRect();

        if (rangeBounds.x === 0) {
            // Если новый абзац

            const range = selectionRange.cloneRange()
            range.setStart(range.startContainer, 0)
            rangeBounds = range.getBoundingClientRect();
            console.log(rangeBounds)

            // const eRangeBounds = e.target.getBoundingClientRect()
            // position.top = eRangeBounds.y + window.scrollY
            // position.left = window.scrollX
        }
        const selectionCoords = getSelectionCoords(selectionRange)
        position.top = selectionCoords.offsetTop + window.scrollY
        position.left = selectionCoords.offsetLeft + window.scrollX + window.scrollX
        console.log(position)

        this.setState({
            blockToolbar: {
                show: true,
                position: position
            }
        });
    }

    handleKeyCommand(command) {
        const {editorState} = this.state;
        // console.log('handleKeyCommand', command)
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (command === 'block-type') {
            this.showBlockTypeWindow()
        }

        if (newState) {
            console.log(newState)
            this.onChange(newState);
            return true;
        }

        return false;
    }

    handleReturn(e) {
        const {editorState} = this.state;
        // console.log('handleReturn', e)

        if (isSoftNewlineEvent(e)) {
            this.onChange(RichUtils.insertSoftNewline(editorState));
            return 'handled';
        } else if (!e.altKey && !e.metaKey && !e.ctrlKey) {
            const currentBlock = getCurrentBlock(editorState);
            const blockType = currentBlock.getType();

            if (blockType === 'SLIDER') {
                this.onChange(addNewBlockAt(editorState, currentBlock.getKey()));
                return 'handled';
            }
        }
    }

    render() {
        const {editorState, inlineToolbar, blockToolbar} = this.state;
        const {value, className} = this.props;

        let classNameList = [cl.editor, className];
        let contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                classNameList.push('RichEditor-hidePlaceholder');
            }
        }

        return (
            <div id="editor-container" className={[cl.block].join(" ")}>
                {inlineToolbar.show &&
                    <InlineToolbar
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle}
                        position={inlineToolbar.position}
                        setLink={this.setLink}
                    />
                }

                {blockToolbar.show &&
                    <BlockToolbar editorState={editorState}
                                  position={blockToolbar.position}
                                  onToggle={this.toggleBlockType.bind(this)}/>
                }
                <div className={classNameList.join(" ")} onClick={this.focus}>
                    <Editor
                        editorState={editorState}
                        onChange={this.onChange}
                        keyBindingFn={this.keyBindingFn}
                        handleKeyCommand={this.handleKeyCommand}
                        customStyleMap={CUSTOM_STYLE_MAP}
                        handleDroppedFiles={this.handleDroppedFiles}
                        handleReturn={this.handleReturn}
                        blockRenderMap={RenderMap}
                        placeholder={defaultPlaceholder}
                        blockRendererFn={this.blockRendererFn}
                        value={value}
                        ref={this.state.editorRef}
                        spellCheck={false}
                    />
                </div>
                {/*<input*/}
                {/*  onClick={this.logState}*/}
                {/*  className="button"*/}
                {/*  type="button"*/}
                {/*  value="Log state"*/}
                {/*/>*/}
                {/*<input*/}
                {/*  onClick={this.logMarkup}*/}
                {/*  className="button"*/}
                {/*  type="button"*/}
                {/*  value="Export & log markup"*/}
                {/*/>*/}
                {/*<div className="result-wrapper">*/}
                {/*  <div className="section-name">*/}
                {/*    Результат:*/}
                {/*  </div>*/}
                {/*  <div className="markup-container" id="js-markup-container" />*/}
                {/*</div>*/}
            </div>
        );
    }
}

function findEntities(type, contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === type
            );
        },
        callback
    );
}

function findLinkEntities(contentBlock, callback, contentState) {
    findEntities('LINK', contentBlock, callback, contentState)
}

const Link = (props) => {
    const {url} = props.contentState.getEntity(props.entityKey).getData();

    return (
        <LinkEditor href={url} title={url} className="link" />
    );
};

const Image = (props) => {
    const {src} = props.contentState.getEntity(props.entityKey).getData();

    return <ImageEditor src={src} alt={'img'} />;
};

const CUSTOM_STYLE_MAP = {
    HIGHLIGHT: {
        backgroundColor: '#4D408F',
    },
};


export default DraftEditor;