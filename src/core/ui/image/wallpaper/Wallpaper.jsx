import React from 'react';
import cl from "./_Wallpaper.module.scss";
import {getImage} from "../../../api/mainAPI";

const Wallpaper = ({image, className, ...props}) => {
    if (image)
        return <img className={[cl.wallpaper, className].join(" ")} src={getImage(image)} alt="wallpaper" {...props}/>;
    return null;
};

export default Wallpaper;