import React from 'react';
import cl from './_EditableMain.module.scss'
import ContentEditable from "react-contenteditable";
import {defaultPlaceholder} from "../core/services/placeholder";
import ReactDomServer from "react-dom/server";

const EditableMain = ({placeholder, onChange, className, maxLength, children, ...props}) => {
    const placeholderLocal = placeholder || defaultPlaceholder
    const handleOnChange = (e) => {
        // e.defaultPrevented()
        console.log(e)
        console.log(e.currentTarget.children)
        console.log(e.currentTarget.childNodes)
        // console.log(e.currentTarget.textContent)
        onChange(e)
    }

    const html = children || ReactDomServer.renderToString(
        <p placeholder={placeholderLocal} />
    )

    return (
        <ContentEditable html={html}
                         onChange={handleOnChange}
                         // onInput={handleOnChange}
                         // onBlur={handleOnChange}
                         placeholder={placeholderLocal}
                         className={[cl.block, className].join(" ")}
                         {...props} />
    );
};

// class EditableMain extends Component {
//
//     constructor(props) {
//         super(props);
//         // State
//         this.state = {
//             // value: props.children,
//             value: '21',
//             buttonPressed: false
//         }
//         // Bind
//         this.handleKeyPress = this.handleKeyPress.bind(this);
//         this.addSpan = this.addSpan.bind(this);
//     }
//
//     handleKeyPress(e) {
//         this.setState({ value: e.currentTarget.value });
//     }
//
//     // addSpan() {
//     //     this.setState({ buttonPressed: true });
//     // }
//
//     render() {
//         let value = this.state.value;
//
//         if (this.state.buttonPressed && value) {
//             value += <span>ЖИЖА</span>;
//         }
//
//         return(
//             <div>
//                 <div contentEditable
//                      onInput={(event)=>{this.handleKeyPress(event)}}
//                      value={value}>
//                 </div>
//                 <button onClick={this.addSpan}>Button</button>
//             </div>
//         );
//     }
// }

export default EditableMain;