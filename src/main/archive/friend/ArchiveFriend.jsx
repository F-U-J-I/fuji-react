import React, {Component} from 'react';
import {ArchiveWrapperContext} from "../core/wrapper/core/context/ArchiveWrapperContext";
import {friendId} from "../core/service/menuID";

class ArchiveFriend extends Component {
    static contextType = ArchiveWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    componentDidMount() {
        this.context.setActiveId(friendId)
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ArchiveFriend;