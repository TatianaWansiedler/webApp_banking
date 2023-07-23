import React from 'react';
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';
import s from './style.module.css'

const Logo = () => {
    return (
        <NavLink to={'/'} className={s.logo}>
            <img src={logo} alt="logo" />
            <h3>My Bank</h3>
        </NavLink>
    );
};

export default Logo;