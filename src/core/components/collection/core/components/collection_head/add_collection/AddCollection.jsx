import React, {Component} from 'react';
import cl from './_AddCollection.module.scss'
import H4 from "../../../../../../ui/title/H4/H4";

class AddCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdded: props.isAdded
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isAdded !== this.state.isAdded) {
            this.setState({
                isAdded: this.props.isAdded
            })
        }
    }

    render() {
        const {className, onClick} = this.props;
        const {isAdded} = this.state;

        return (
            <div className={[cl.block, className, isAdded ? cl.isAdded : ""].join(" ")} >
                <div className={cl.image} onClick={onClick}/>
                <H4 className={cl.title}/>
            </div>
        );
    }
}

export default AddCollection;