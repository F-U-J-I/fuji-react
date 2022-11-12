import React from 'react';
import cl from './_StatusCollection.module.scss'
import Text14M from "../../../../ui/text/14/medium/Text14M";

const StatusCollection = ({className, ...props}) => {
    return <Text14M className={[className, cl.title].join(" ")}{...props}>Подборка</Text14M>
};

export default StatusCollection;