import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {LinkType} from '../../../utils/types';
import style from './style.module.scss';


/**
 The component takes a parameter customStyle for reuse . Component used in Header and HeaderModal.
 The component compares the link title with pathname and applies the style "active",if they are equal.
 */


type NavbarPropsType = {
    customStyle?: string
    onClose?: () => void;
    links: Array<LinkType>
}


const Navbar = ({customStyle = "", onClose, links}: NavbarPropsType) => {
    const {pathname} = useLocation()


    const isActive = (pn: string) => {
        if (pn === pathname) return 'active'
    }

    return (
        <ul className={style[`navbar_${customStyle}`]}>
            {
                links.map((link, index) => (
                    <li key={index} className={`${style.link} ${style[isActive(link.path) || '']}`}>
                        <Link  onClick={onClose} to={link.path}>
                            {link.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Navbar