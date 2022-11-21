import React from 'react';
import cl from "./_ProgressCourseBig.module.scss";
import ProgressCourse from "../core/components/ProgressCourse";


const ProgressCourseBig = ({...props}) => {
    return <ProgressCourse classNameBar={cl.progressBar} classNameText={cl.progressBarText} {...props} />
};

export default ProgressCourseBig;