import React from 'react';
import {Link} from "react-router-dom";
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