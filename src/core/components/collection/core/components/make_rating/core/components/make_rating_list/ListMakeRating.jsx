import React from 'react';
import cl from "./_ListMakeRating.module.scss"

const ListMakeRating = ({className, children, ...props}) => {
    return (
        <div className={[className, cl.list].join(" ")} {...props}>
            {children}
        </div>
    );
};

export default ListMakeRating;