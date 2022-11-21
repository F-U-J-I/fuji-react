import React from 'react';
import cl from "./_ProgressCourseMini.module.scss";
import ProgressCourse from "../core/components/ProgressCourse";


const ProgressCourseMini = ({...props}) => {
    return <ProgressCourse classNameBar={cl.progressBar} classNameText={cl.progressBarText} {...props} />
};

export default ProgressCourseMini;