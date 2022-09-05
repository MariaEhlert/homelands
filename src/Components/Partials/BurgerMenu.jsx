import { useState } from "react"
import { NavLink } from "react-router-dom";
import './BurgerMenu.scss'

export const BurgerMenu = props => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <>
            <div className={isActive ? 'burgerMenuActive' : 'burgerMenu'} onClick={handleToggle}>
                <div className="burgerMenuLine"></div>
                <div className="burgerMenuLine"></div>
                <div className="burgerMenuLine"></div>
            </div>
            <ul className={isActive ? 'activeMenu' : 'menu'}> 
                {props && props.navItems && props.navItems.map((value, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={value.path} onClick={handleToggle}>{value.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}