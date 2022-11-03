import React from 'react';
import cl from "./_Input.module.scss"


const Input = ({className, image, alt, ...props}) => {

    if (image) {
        let localAlt = 'icon'
        if (alt) {
            localAlt = alt
        }

        return (
            <div className={cl.wrapper}>
                <img src={image} className={cl.image} alt={localAlt}/>
                <input {...props} className={[className, cl.input].join(" ")}/>
            </div>
        );
    }

    return (
        <input {...props} className={[className, cl.input].join(" ")}/>
    );
};

export default Input;