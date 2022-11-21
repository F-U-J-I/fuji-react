import React from 'react';
import clCommon from "../scss/_SystemCollection.module.scss";
import SystemHeadCollection from "../components/head/SystemHeadCollection";

const SystemWrapper = ({title, to, className, children, ...props}) => {
    return (
        <div className={[clCommon.block, className].join(" ")} {...props}>
            <SystemHeadCollection title={title} to={to} />
            {children}
        </div>
    );
};

export default SystemWrapper;