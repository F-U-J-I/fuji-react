import React from 'react';
import cl from './_CollectionTracking.module.scss';
import Text12M from "../../../../../../ui/text/12/medium/Text12M";

const getTrackingText = (tracking) => {
    if (tracking === 0)
        return 'Нет следящих'
    // 11..19; x5..x9; x0
    else if ((tracking > 10 && tracking < 20) || (tracking % 10 > 4 || tracking % 10 === 0))
        return `${tracking} следящих`
    // x1, (кроме 11..19)
    else if (tracking % 10 === 1)
        return `${tracking} следящий`
    return `${tracking} следящих`
}

const CollectionTracking = ({membersAmount, className, ...props}) => {
    return (
        <pre className={[cl.members, className].join(" ")} {...props}>
            {/*<Text12B className={cl.membersText}>{membersAmount} </Text12B>*/}
            <Text12M className={cl.membersText}>{getTrackingText(membersAmount)}</Text12M>
        </pre>
    );
};

export default CollectionTracking;