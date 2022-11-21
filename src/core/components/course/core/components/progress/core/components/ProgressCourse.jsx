import React from 'react';
import cl from "./_ProgressCourse.module.scss";
import {getCurrentProgressPercent} from "../../../../service";
import Text14B from "../../../../../../../ui/text/14/bold/Text14B";
import Text14M from "../../../../../../../ui/text/14/medium/Text14M";

const ProgressCourse = ({progress, maxProgress, className, classNameBar, classNameText, ...props}) => {
    return (
        <div className={[cl.progress, className].join(" ")} {...props}>
            <div className={[cl.progressBar, classNameBar].join(" ")}>
                <div className={cl.progressBarAll}/>
                <div className={cl.progressBarComplete}
                     style={{width: `${getCurrentProgressPercent(progress, maxProgress)}%`}}/>
            </div>
            <pre className={[cl.progressBarText, classNameText].join(" ")}>
                <Text14B>{progress}/{maxProgress}</Text14B>
                <Text14M> выполнено</Text14M>
            </pre>
        </div>
    );
};

export default ProgressCourse;