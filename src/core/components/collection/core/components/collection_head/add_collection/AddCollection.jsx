import React, {Component} from 'react';
import cl from './_AddCollection.module.scss'
import H3 from "../../../../../../ui/title/H3/H3";

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

    // console.log('AddCollection')
    // console.log(collectionIsAdded)
    render() {
        const {className, onClick} = this.props;
        const {isAdded} = this.state;

        return (
            <div className={[cl.block, className, isAdded ? cl.isAdded : ""].join(" ")} >
                <div className={cl.image} onClick={onClick}/>
                <H3 className={cl.title}/>
            </div>
        );
    }
}

export default AddCollection;