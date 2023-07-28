import React from 'react';
import styles from './slyle.module.css'
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import { Variants_btn } from '../../utils';
import img from '../../assets/pic3.png'
import Logo from '../../components/Logo';
import { services } from '../../content/homePage';
import FAQs from '../../components/FAQs';
import MC from '../../assets/Mastercard.svg'
import visa from '../../assets/visa.svg'
import PayPal from '../../assets/PayPal.svg'
import Payoneer from '../../assets/Payoneer.svg'
import Footer from '../../components/Footer';

const companies = [MC, visa, PayPal, Payoneer]

const HomePage = () => {
    return (
        <div className={styles.page}>
            {/* header + first scrin */}
            <div className={styles.container}>
                <header className={styles.header}>
                    <nav className={styles.navbar}>
                        <Logo/>
                        <div className={styles.links}>
                            <NavLink to={"/about_us"}>About</NavLink>
                            <NavLink to={"/contact_us"}>Contact Us</NavLink>
                        </div>
                    </nav>
                    <Button to={"/login_page"} children='Login' btn_variants={Variants_btn.OUTLINED}></Button>
                </header>
                <div className={styles.main_content}>
                    <div className={styles.descr}>
                        <div >
                            <h3 className={styles.bank_name }>My Bank</h3>
                            <h1 className={styles.title }>Experience <br /> hassle-free banking</h1>
                            <p className={styles.text }>
                                Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Reen Bank.
                            </p>
                        </div>
                        <div className={styles.buttons }>
                            <Button to={'/register_page'} children='Get Started' btn_variants={Variants_btn.CONTAINED}/>
                            <Button to={'/'} children='Learn More' btn_variants={Variants_btn.OUTLINED}/>
                        </div>
                    </div>
                    <div className={styles.poster}>
                        <img src={img} alt="cards"/>
                    </div>
                </div>
            </div>
            {/* services */}
            <div className={styles.services}>
                <div className={ styles.container}>
                    <h2>Services</h2>
                    <div className={styles.wrapper}>
                        {
                            services.map(({ icon, title, descr }) =>
                                <div className={styles.wrapper_item}>
                                    <img src={icon} alt={`icon-${icon}`} />
                                    <div className={styles.wrapper_item_info}>
                                        <h4>{title}</h4>
                                        <p>{descr}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* FAQs */}
            <div className={styles.container}>
                <FAQs />
            </div>
            {/* companies */}
            <div className={styles.componies}>
                <div className={ styles.container}>
                    <h4 className={ styles.subtitle}>Supported by various finance services</h4>
                    <div className={ styles.companies_wrapper}>
                        {
                            companies.map(el =>
                                <div className={styles.companies_item}>
                                    <img src={el} alt={ el } />
                                </div>)
                        }
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className={styles.container}>
                <Footer/>
            </div>
        </div>
    );
};

export default HomePage;