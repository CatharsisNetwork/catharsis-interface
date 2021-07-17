import React from 'react';
import classes from './style.module.scss';


const links = [
    {link: "Main"},
    {link: "Gallery"},
    {link: "Account"},
    {link: "Fractionalize"},
    {link: "FAW"},
    {link: "Auction"},
]

function FooterLinks() {
    return (
        <div className={classes.footer_content__links}>
            {links.map((el, idx) => {
                return <a href={"/"} key={idx}>{el.link}</a>
            })
            }
        </div>
    );
}

export default FooterLinks;