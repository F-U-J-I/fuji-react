import React, {useState} from 'react';
import cl from './_ButtonAdd.module.scss'
import addSVG from '../../../../../../../../../core/static/img/add-fill-white.svg'
import Button from "../../../../../../../../../core/ui/button/core/components/button/Button";
import ModalAddCourseToCollection
    from "../../../../../../../../../core/components/modal/dark/add_course_to_collection/ModalAddCourseToCollection";

const ButtonAdd = ({addedCollections, path, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <Button onClick={() => setIsVisible(true)} className={[cl.button, className].join(" ")} {...props}>
                <img src={addSVG} alt='add' className={cl.image} />
            </Button>
            {isVisible &&
                <ModalAddCourseToCollection path={path}
                                            setIsVisible={setIsVisible}
                                            addedCollections={addedCollections} />
            }
        </>
    );
};

export default ButtonAdd;