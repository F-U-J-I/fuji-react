import React, {Component} from 'react';
import cl from './_LearnCourseWrapper.module.scss'
import {LearnCourseWrapperContext} from "./core/context/LearnCourseWrapperContext";
import {CourseWrapperContext} from "../../../core/wrapper/core/context/CourseWrapperContext";

class LearnCourseWrapper extends Component {
    static contextType = CourseWrapperContext;
    constructor(props) {
        super(props);
        this.state = {
            fromChildClassName: '',
        }
    }

    setFromChildClassName = (newClassName) => {
        this.setState({fromChildClassName: newClassName})
    }

    render() {
        const {fromChildClassName} = this.state;
        const {children, ...props} = this.props;
        const {setTitle, setDescription, setTopMenu, setSteps} = this.context;

        const content = (
                <LearnCourseWrapperContext.Provider value={{
                    setTitle: setTitle,
                    setDescription: setDescription,
                    setTopMenu: setTopMenu,
                    setMenuId: this.setMenuId,
                    setTo: this.setTo,
                    setSteps: setSteps,
                    setClassName: this.setFromChildClassName,
                    ...props
                }}>
                    {children}
                </LearnCourseWrapperContext.Provider>
            )

        return (
            <>
                <div className={[cl.content, fromChildClassName].join(" ")}>
                    {content}
                </div>
            </>
        );
    }
}

const LearnCourseWrapperContextConsumer = LearnCourseWrapperContext.Consumer;
export {LearnCourseWrapper, LearnCourseWrapperContextConsumer};