import React from 'react';
import cl
    from "./_ProgressBarCardProgressItem.module.scss";
import {getCurrentProgressPercent} from "../../../../../../../../../../../../../core/components/course/core/service";
import Text12B from "../../../../../../../../../../../../../core/ui/text/12/bold/Text12B";
import Text12M from "../../../../../../../../../../../../../core/ui/text/12/medium/Text12M";

const ProgressBarCardProgressItem = ({progress, max_progress, className, classNameBar, classNameText, ...props}) => {
    return (
        <div className={[cl.progress, className].join(" ")} {...props}>
            <div className={cl.progressBar}>
                <div className={cl.progressBarAll}/>
                <div className={[cl.progressBarComplete, classNameBar].join(" ")}
                     style={{width: `${getCurrentProgressPercent(progress, max_progress)}%`}}/>
            </div>
            <pre className={[cl.progressBarText, classNameText].join(" ")}>
                <Text12B>{progress}/{max_progress}</Text12B>
                <Text12M> выполнено</Text12M>
            </pre>
        </div>
    );
};

export default ProgressBarCardProgressItem;