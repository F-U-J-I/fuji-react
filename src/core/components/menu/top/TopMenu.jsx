import React from 'react';
import cl from './_TopMenu.module.scss'
import leftCornerMenuSVG from '../../../static/img/left-corner-menu-dark.svg'
import rightCornerMenuSVG from '../../../static/img/right-corner-menu-dark.svg'
import ButtonDarkBigFR from "../../../ui/button/radius/fill/dark/big/ButtonDarkBigFR";
import ButtonPurpleBigFR from "../../../ui/button/radius/fill/purple/big/ButtonPurpleBigFR";

const TopMenu = ({menu, activeID, className, ...props}) => {
    return (
        <div className={[className, cl.menu].join(" ")} {...props}>
            <img src={leftCornerMenuSVG} alt='left' className={cl.border}/>
            <div className={cl.content}>
                {menu.map(item =>
                <div key={item.id} className={cl.button}>
                    {item.id === activeID
                        ? (<ButtonPurpleBigFR to={item.to} title={item.title} />)
                        : (<ButtonDarkBigFR to={item.to} title={item.title} />)
                    }
                </div>
                )}
            </div>
            <img src={rightCornerMenuSVG} alt='right' className={cl.border}/>
        </div>
    );
};

export default TopMenu;