import React, { FC, ReactNode } from 'react';
import styles from './style.module.css'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Logo from '../../components/Logo';

interface Props {
    title: string,
    descr: string,
    form?: ReactNode
}

const MainLayout: FC<Props> = ({ title, descr, form }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <Logo />
                        <div>
                            <h3 className={styles.bank_name}>My Bank</h3>
                            <h1 className={styles.title}>{title}</h1>
                            <p className={styles.text}>{descr}</p>
                        </div>
                        <div className={styles.soc_media}>
                            <Facebook fontSize='large' sx={{ color: "var(--main-color)" }} />
                            <Instagram fontSize='large' sx={{ color: "var(--main-color)" }} />
                            <Twitter fontSize='large' sx={{ color: "var(--main-color)" }} />
                        </div>
                    </div>
                    <div className={styles.form_container}>
                        {form}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
