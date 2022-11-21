import React, {useState} from 'react';
import {getInCollectionText} from "../../../../../../../service/declension";
import cl from "./_NavigationCourseBigListItem.module.scss";
import Text20M from "../../../../../../../ui/text/20/medium/Text20M";
import ButtonPurpleBigFR from "../../../../../../../ui/button/radius/fill/purple/big/ButtonPurpleBigFR";
import ModalAddCourseToCollection
    from "../../../../../../modal/dark/add_course_to_collection/ModalAddCourseToCollection";

const ADD = 'Добавить'
const POP = 'Добавлено'

const NavigationCourseBigListItem = ({
                                         path, addedCollections, quantityInCollection, courseAddedToCollection,
                                         className, ...props
                                     }) => {
    const [quantityInCollectionLocal, setQuantityInCollectionLocal] = useState(quantityInCollection)
    const quantityInCollectionView = `${quantityInCollectionLocal} ${getInCollectionText(quantityInCollectionLocal)}`
    const isAdded = (quantityLocal) => {
        return quantityLocal > quantityInCollection - courseAddedToCollection.length
    }

    const [isAddedCourse, setIsAddedCourse] = useState(isAdded(quantityInCollectionLocal))
    const [isVisible, setIsVisible] = useState(false)

    const getTitleButton = () => {
        if (isAddedCourse)
            return POP
        return ADD
    }
    const handleOnClickAddCourse = (quantityLocal) => {
        setIsAddedCourse(isAdded(quantityLocal))
        setIsVisible(!isVisible)
    }
    return (
        <div className={[cl.navigation, className].join(" ")} {...props}>
            <div className={cl.text}>
                <Text20M className={cl.textItem}>Находится в</Text20M>
                <Text20M className={[cl.textItem, cl.purple].join(" ")}>{quantityInCollectionView}</Text20M>
            </div>
            <ButtonPurpleBigFR title={getTitleButton()}
                               onClick={() => setIsVisible(true)}
                               className={[cl.button, isAddedCourse ? cl.active : ''].join(" ")}/>
            {isVisible &&
                <ModalAddCourseToCollection path={path}
                                            setIsVisible={setIsVisible}
                                            addedCollections={addedCollections}
                                            quantityInCollection={quantityInCollectionLocal}
                                            onClick={handleOnClickAddCourse}
                                            setQuantityInCollectionLocal={setQuantityInCollectionLocal}/>
            }
        </div>
    );
};

export default NavigationCourseBigListItem;