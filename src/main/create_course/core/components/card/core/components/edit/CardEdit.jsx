import React, {useState} from 'react';
import cl from './_CardEdit.module.scss'
import clCommon from '../../scss/_Card.module.scss'
import H6 from "../../../../../../../../core/ui/title/H6/H6";
import Text14M from "../../../../../../../../core/ui/text/14/medium/Text14M";
import {Link} from "react-router-dom";
import ButtonKebab from "./core/components/button_kebab/ButtonKebab";
import ModalEditCard from "./core/components/modal/edit/ModalEditCard";
import ModalDeleteCard from "./core/components/modal/delete/ModalDeleteCard";

const CardEdit = ({to, image, title, description,
                      titleModalEdit, onClickEdit,
                      titleModalDelete, onClickDelete,
                      className, ...props}) => {
    const [isVisibleEdit, setIsVisibleEdit] = useState(false)
    const [isVisibleDelete, setIsVisibleDelete] = useState(false)

    return (
        <>
            <Link to={to} className={[cl.card, clCommon.card, className].join(" ")} {...props}>
                <ButtonKebab className={cl.kebab}
                             setIsVisibleEdit={setIsVisibleEdit}
                             setIsVisibleDelete={setIsVisibleDelete}/>
                <img src={image} alt='preview' className={cl.image} />
                <H6 className={cl.title}>{title}</H6>
                <Text14M className={cl.description}>{description}</Text14M>
            </Link>
            {isVisibleEdit &&
                <ModalEditCard titleModal={titleModalEdit}
                               preview={image}
                               title={title}
                               setIsVisible={setIsVisibleEdit}
                               onClickSubmit={onClickEdit}/>
            }
            {isVisibleDelete &&
                <ModalDeleteCard titleModal={titleModalDelete}
                                 onClickSubmit={onClickDelete}
                                 setIsVisible={setIsVisibleDelete}/>}
        </>
    );
};

export default CardEdit;