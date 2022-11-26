import React from 'react';
import ModalEdit from "../../../../../../../modal/edit/default/ModalEdit";
import ModalTitleWrapper from "../../../../../../../modal/edit/with_description/ModalTitleWrapper";

const GetModalEdit = ({description, ...props}) => {
    if (description === undefined)
        return <ModalEdit {...props}/>
    return <ModalTitleWrapper description={description} {...props} />
};

export default GetModalEdit;