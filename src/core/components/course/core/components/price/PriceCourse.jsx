import React from 'react';
import cl from './_PriceCourse.module.scss'
import Text18M from "../../../../../ui/text/18/medium/Text18M";
import Text14M from "../../../../../ui/text/14/medium/Text14M";

const PriceCourse = ({price, className, ...props}) => {
    if (price) {
        return (

            <div className={[cl.nonFree, className].join(" ")} {...props}>
                <Text18M className={cl.price}>{price}</Text18M>
                <Text14M className={cl.symbol}>₽</Text14M>
            </div>
        )
    }
    return (
        <Text18M className={[cl.free, className].join(" ")} {...props}>Бесплатно</Text18M>
    )
};

export default PriceCourse;