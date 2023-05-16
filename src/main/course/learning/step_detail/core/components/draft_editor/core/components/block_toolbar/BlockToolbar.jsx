import React from 'react';
import cl from './_BlockToolbar.module.scss'
import {BLOCK_LABELS, BlockType} from "../../services/config";
import Text20M from "../../../../../../../../../../core/ui/text/20/medium/Text20M";

const BlockToolbar = ({position, editorState, onToggle, className, ...props}) => {
    const handleOnMouseDown = (e, typeTitle) => {
        e.preventDefault();
        onToggle(typeTitle);
    }

    return (
        <div className={[cl.block, className].join(" ")} style={position} {...props}>
            <ul className={cl.list}>
                {Object.keys(BlockType).map(type =>
                    <li key={type}
                        onMouseDown={e => handleOnMouseDown(e, BlockType[type])}
                        className={cl.item}>
                        <img className={cl.image} src={BLOCK_LABELS[BlockType[type]].image} alt={BLOCK_LABELS[BlockType[type]].title} />
                        <Text20M className={cl.title}>{BLOCK_LABELS[BlockType[type]].title}</Text20M>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default BlockToolbar;