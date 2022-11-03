import React from 'react';
import cl from "./_ImageWrapper.module.scss";
import Text16M from "../../text/16/medium/Text16M";
import editSVG from "../../../static/img/edit-fill-white.svg"
import Text18M from "../../text/18/medium/Text18M";

const ImageWrapper = ({onChange, classNameImage, src, className, ...props}) => {
    return (
        <div className={[cl.wrapper, className].join(" ")} {...props}>
            {src
                ? (<>
                    <div className={cl.imageWrapper}>
                        <input type="file" onChange={onChange} accept="image/png, image/gif, image/jpeg"
                               className={[cl.input, classNameImage].join(" ")}/>
                        <div className={[classNameImage, cl.dark].join(" ")}>
                            <div className={cl.editButton}>
                                <img className={cl.editButtonImage} src={editSVG} alt="edit"/>
                            </div>
                            <Text18M className={cl.darkText}>Выбрать фото / гифку</Text18M>
                        </div>
                        <img className={[classNameImage, cl.image].join(" ")} src={src} alt='icon'/>
                    </div>
                    <Text16M className={cl.help}>(наведите на обложку чтобы изменить)</Text16M>
                </>)
                : (
                    <div className={cl.default}>
                        <input type="file" onChange={onChange} accept="image/png, image/gif, image/jpeg"
                               className={[cl.input, cl.defaultInput].join(" ")}/>
                        <Text16M className={cl.defaultText}>Добавить обложку</Text16M>
                    </div>
                )
            }
        </div>
    );
};

export default ImageWrapper;