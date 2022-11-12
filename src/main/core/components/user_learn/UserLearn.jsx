import React, {Component} from 'react';
import {getStudiedCourses, getStudiedPercent, getStudyingCourses} from "../../api/userAPI";
import cl from "./_UserLearn.module.scss";
import SystemBaseCollection from "../../../../core/components/collection/big/system/base/SystemBaseCollection";
import StudiedPercent from "../../../user/learn/core/components/StudiedPercent";

class UserLearn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            studyingCourses: [],
            studyingPercent: 0,
            studiedCollections: [],
        }
    }

    componentDidMount() {
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.path !== this.props.path) {
            this._setData()
        }
    }

    _setData() {
        this._setStudying()
        this._setStudied()
        this._setStudiedPercent()
    }

    _setStudying() {
        getStudyingCourses(this.props.path, 4).then(r => {
            this.setState({
                studyingCourses: r.results,
                isLoad: true,
            })
        })
    }

    _setStudied() {
        getStudiedCourses(this.props.path, 5).then(r => {
            this.setState({
                studiedCollections: r.results,
                isLoad: true,
            })
        })
    }

    _setStudiedPercent() {
        getStudiedPercent(this.props.path).then(r => {
            this.setState({
                studyingPercent: r,
                isLoad: true,
            })
        })
    }


    render() {
        const {studyingCourses, studiedCollections, studyingPercent, isLoad} = this.state;
        const {className, ...props} = this.props;

        const toProcess = 'learn/process/';
        const toComplete = 'learn/complete/';
        if (isLoad)
            return (
                <div className={[cl.content, className].join(" ")} {...props}>
                    <div className={cl.contentLine}>
                        <SystemBaseCollection title="Изучает" to={`learn/process/`} courses={studyingCourses} className={cl.collection}/>
                        <StudiedPercent className={cl.studiedPercent}
                                        percent={studyingPercent.percent}
                                        toProcess={toProcess}
                                        toComplete={toComplete}
                                        studiedQuantity={studyingPercent.studied_quantity}
                                        studyingQuantity={studyingPercent.studying_quantity}/>
                    </div>
                    <SystemBaseCollection title="Завершил" to={`learn/complete/`} courses={studiedCollections} className={cl.collection}/>
                </div>
            );
    }
}

export default UserLearn;