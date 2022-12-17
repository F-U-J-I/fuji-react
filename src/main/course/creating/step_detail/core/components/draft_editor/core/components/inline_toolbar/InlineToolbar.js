import React from 'react';
import '../../scss/inline_styles/_InlineStyles.scss'
import cl from './_InlineToolbar.module.scss'
import {INLINE_STYLES} from "../../services/config";


const InlineToolbar = ({ editorState, onToggle, position, setLink }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className={cl.toolbar} style={position}>
      <ul className={cl.list}>
        {INLINE_STYLES.map(type =>
          <li
            key={type.label}
            className={[type.style, cl.item, currentStyle.has(type.title) ? cl.itemActive : ''].join(" ")}
            onMouseDown={(e) => {
              e.preventDefault();
              onToggle(type.title);
            }}
          >
            {type.label}
          </li>
        )}
        <li
          key="add-link-button"
          className={cl.item}
          onMouseDown={setLink}
        >
          <p>link</p>
        </li>
      </ul>
    </div>
  );
};

export default InlineToolbar;