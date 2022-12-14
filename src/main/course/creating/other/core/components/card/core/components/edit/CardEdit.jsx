import React, {useState} from 'react';
import cl from './_CardEdit.module.scss'
import clCommon from '../../scss/_Card.module.scss'
import {Link} from "react-router-dom";
import ButtonKebab from "./core/components/button_kebab/ButtonKebab";
import ModalEdit from "../../../../modal/edit/default/ModalEdit";
import ModalDeleteCard from "./core/components/modal/delete/ModalDeleteCard";
import H6 from "../../../../../../../../../../core/ui/title/H6/H6";
import Text14M from "../../../../../../../../../../core/ui/text/14/medium/Text14M";

const CardEdit = ({to, image, title, description,
                      titleModalEdit, onClickEdit,
                      titleModalDelete, onClickDelete,
                      className, ...props}) => {
    const [isVisibleEdit, setIsVisibleEdit] = useState(false)
    const [isVisibleDelete, setIsVisibleDelete] = useState(false)

    return (
        <div className={cl.block}>
            <Link to={to} className={[cl.card, clCommon.card, className].join(" ")} {...props}>
                <img src={image} alt='preview' className={cl.image} />
                <H6 className={cl.title}>{title}</H6>
                <Text14M className={cl.description}>{description}</Text14M>
            </Link>
            <ButtonKebab className={cl.kebab}
                         setIsVisibleEdit={setIsVisibleEdit}
                         setIsVisibleDelete={setIsVisibleDelete}/>
            {isVisibleEdit &&
                <ModalEdit titleModal={titleModalEdit}
                           preview={image}
                           title={title}
                           setIsVisible={setIsVisibleEdit}
                           onClickSubmit={onClickEdit}/>
            }
            {isVisibleDelete &&
                <ModalDeleteCard titleModal={titleModalDelete}
                                 onClickSubmit={onClickDelete}
                                 setIsVisible={setIsVisibleDelete}/>}
        </div>
    );
};

export default CardEdit;