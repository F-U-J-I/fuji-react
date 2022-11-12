import React, {Component} from 'react';
import {ArchiveWrapperContext} from "../core/wrapper/core/context/ArchiveWrapperContext";
import {collectionId} from "../core/service/menuID";
import H2 from "../../../core/ui/title/H2/H2";
import cl from "../core/scss/_Archive.module.scss";
import Collections from "../../core/components/collections/Collections";

class ArchiveCourse extends Component {
    static contextType = ArchiveWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    componentDidMount() {
        this.context.setActiveId(collectionId)
    }

    render() {
        const {...props} = this.props;
        const path = sessionStorage.getItem('path')

        return (
            <div>
                <H2 className={cl.title}>Подборки</H2>
                <Collections path={path} className={cl.content} {...props} />
            </div>
        );
    }
}

export default ArchiveCourse;