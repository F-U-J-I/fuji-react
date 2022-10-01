import React from 'react';
import cl from "./_ProgressCourse.module.scss";
import Text12B from "../../../../../ui/text/12/bold/Text12B";
import Text12M from "../../../../../ui/text/12/medium/Text12M";

const getCurrentProgressPercent = (progress, max_progress) => {
    if ((progress !== 0) || (max_progress !== 0))
        return progress / max_progress * 100
    return 0
}

const ProgressCourse = ({progress, maxProgress, className, ...props}) => {
    return (
        <div className={className} {...props}>
            <div className={cl.progressBar}>
                <div className={cl.progressBarAll}/>
                <div className={cl.progressBarComplete}
                     style={{width: `${getCurrentProgressPercent(progress, maxProgress)}%`}}/>
            </div>
            <pre className={cl.progressBarText}>
                <Text12B>{progress}/{maxProgress}</Text12B>
                <Text12M> выполнено</Text12M>
            </pre>
        </div>
    );
};

export default ProgressCourse;