import React from 'react';
import styles from './style.module.css'
import Logo from '../Logo';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={ styles.footer}>
            <div className={styles.logo }>
                <Logo />
                <div>
                    <p className={ styles.info}>2023 ReenBank. All rights reserved!</p>
                    <div className={styles.soc_media}>
                        <Facebook fontSize='large' sx={{ color: "var(--main-color)" }} />
                        <Instagram fontSize='large' sx={{ color: "var(--main-color)" }} />
                        <Twitter fontSize='large' sx={{ color: "var(--main-color)" }} />
                    </div>
                </div>
            </div>
            <div className={ styles.navigation}>
                <div className={styles.help}>
                    <h3>Help</h3>
                    <Link to={''}>Help Center</Link>
                    <Link to={''}>Contact Us</Link>
                    <Link to={''}>How to Use</Link>
                </div>
                <div className={styles.about}>
                    <h3>About</h3>
                    <Link to={''}>About My Bank</Link>
                    <Link to={''}>Terms & Conditions</Link>
                    <Link to={''}>Privacy Policy</Link>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;