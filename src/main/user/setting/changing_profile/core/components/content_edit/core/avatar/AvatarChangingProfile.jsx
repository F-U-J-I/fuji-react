import React from 'react';
import cl from './_AvatarChangingProfile.module.scss';
import H5 from "../../../../../../../../../core/ui/title/H5/H5";
import ImageWrapper from "../../../../../../../../../core/ui/image/wrapper_image/ImageWrapper";

const AvatarChangingProfile = ({image, onSelected, className, ...props}) => {

    return (
        <div className={[cl.content, className].join(" ")} {...props}>
            <H5 className={cl.title}>Аватар</H5>
            <ImageWrapper onChange={onSelected}
                          src={image}
                          className={cl.imageWrapper}
                          classNameImage={cl.image} />
        </div>
    );
};

export default AvatarChangingProfile;