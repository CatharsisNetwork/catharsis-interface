import React  from 'react'
import {Link, useLocation} from 'react-router-dom'
import style from './style.module.scss';



/**
 The component takes a parameter customStyle for reuse . Component used in Header and HeaderModal.
 The component compares the link title with pathname and applies the style "active",if they are equal.
 */


type NavbarPropsType = {
    customStyle?: string
    onClose?: () => void;
}

const Navbar = ({customStyle = "",onClose}: NavbarPropsType) => {
    const {pathname} = useLocation()


    const navLinks = [
        {label: 'Main', path: '/'},
        {label: 'Fractionalize', path: '/fractionalize'},
        {label: 'The Limbo', path: '/the_limbo'},
        {label: 'FAQ', path: '/faq'},
        {label: 'Farm LP', path: '/farm_lp'},
    ]

    const isActive = (pn: string) => {
        if (pn === pathname) return 'active'
    }

    return (
        <ul className={style[`navbar_${customStyle}`]}>
            {
                navLinks.map((link, index) => (
                    <li key={index} className={`${style.link} ${style[isActive(link.path) || '']}`}>
                        <Link className={style.link__text} onClick={onClose} to={link.path}>
                            {link.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Navbar