export const getPositionParagraph = (editorState, e) => {
    const currentBlockKey = editorState.getSelection().getStartKey()
    const eItem = e.target.querySelectorAll(`span[data-offset-key="${currentBlockKey}-0-0"]`)[0]
    return eItem.getBoundingClientRect()
}