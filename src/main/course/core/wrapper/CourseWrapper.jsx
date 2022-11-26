import React, {Component} from 'react';
import {MainPageWrapperContext} from "../../../core/context/Context";
import {CourseWrapperContext} from "./core/context/CourseWrapperContext";

class CourseWrapper extends Component {
    static contextType = MainPageWrapperContext;

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setActiveId(null)
        this.context.setMin(true)
    }

    render() {
        const {children, ...props} = this.props;
        const {setTitle, setDescription, setTopMenu, setSteps} = this.context;

        return (
            <CourseWrapperContext.Provider value={{
                setTitle: setTitle,
                setDescription: setDescription,
                setTopMenu: setTopMenu,
                setSteps: setSteps,
                ...props
            }}>

            </CourseWrapperContext.Provider>
        );
    }
}

const CourseWrapperContextConsumer = CourseWrapperContext.Consumer;
export {CourseWrapper, CourseWrapperContextConsumer};