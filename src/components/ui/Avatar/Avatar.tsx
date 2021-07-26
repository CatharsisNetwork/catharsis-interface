import React from 'react';
import avatar from "../../../assets/image/header/avatar.png";

function Avatar() {
    return (
        <span >
            <img src={avatar} alt="avatar"/>
            <p>Account</p>
        </span>
    )
}

export default Avatar;