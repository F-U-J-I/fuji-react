import React, {useState} from 'react';
import CardDefaultItem from "../default/CardDefaultItem";
import CardCompleteItem from "../complete/CardCompleteItem";
import CardProgressItem from "../progress/CardProgressItem";


const CardListItem = ({to, image, title, description, progress, classNameProgressBar, className, ...props}) => {
    if (progress === null) {
        return <CardDefaultItem to={to} image={image}
                                title={title}
                                description={description}
                                className={className} {...props}/>
    }
    if (progress.max_progress === progress.progress) {
        return (
            <CardCompleteItem to={to} image={image}
                              title={title}
                              description={description}
                              className={className} {...props} />
        );
    }
    return (
        <CardProgressItem to={to} image={image}
                          title={title}
                          max_progress={progress.max_progress}
                          progress={progress.progress}
                          classNameBar={classNameProgressBar}
                          className={className} {...props} />
    );
};

export default CardListItem;