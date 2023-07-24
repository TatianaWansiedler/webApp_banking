import React from 'react';
import s from './slyle.module.css'
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import { Variants_btn } from '../../utils';
import img from '../../assets/pic3.png'
import Logo from '../../components/Logo';


const HomePage = () => {
    return (
        <div className={s.page}>
            <div className={s.container}>
                <header className={s.header}>
                    <nav className={s.navbar}>
                        <Logo/>
                        <div className={ s.links}>
                            <NavLink to={"/about"}>About</NavLink>
                            <NavLink to={"/contact_us"}>Contact Us</NavLink>
                        </div>
                    </nav>
                    <Button to={"/login_page"} children='Login' btn_variants={Variants_btn.OUTLINED}></Button>
                </header>
                <div className={s.main_content}>
                    <div className={s.descr}>
                        <div >
                            <h3 className={ s.bank_name }>My Bank</h3>
                            <h1 className={ s.title }>Experience <br /> hassle-free banking</h1>
                            <p className={ s.text }>
                                Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Reen Bank.
                            </p>
                        </div>
                        <div className={ s.buttons }>
                            <Button to={'/register_page'} children='Get Started' btn_variants={Variants_btn.CONTAINED}/>
                            <Button to={'/'} children='Learn More' btn_variants={Variants_btn.OUTLINED}/>
                        </div>
                    </div>
                    <div className={ s.poster}>
                        <img src={img} alt="cards"/>
                    </div>
                </div>
                <div>Servieces</div>
                <div>FAQs</div>
                <div>Supported by</div>
                <div>Footer</div>
            </div>
        </div>
    );
};

export default HomePage;