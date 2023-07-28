import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css'
import arrow from '../../assets/arrow.svg'

const FAQs = () => {
    return (
        <div >
            <h2 className={styles.title}>FAQs</h2>
            <div className={styles.container}>
                <div className={styles.current_item}>
                    <Link className={ styles.link_quest} to={''}>How do I sign up for an account with Reen Bank?</Link>
                    <p className={ styles.answer}>
                        You can sign up for an account with Reen Bank online by visiting
                        our website and filling out the online application form. Once your
                        application is approved, you will receive instructions for setting
                        up your account and accessing our online banking platform.
                    </p>
                </div>
                <div className={ styles.quest_list}>
                    <div className={styles.quest_list_item}>
                        <Link to={''}>What types of accounts does Reen Bank offer?</Link>
                        <img src={ arrow} alt="" />
                    </div>
                    <div className={styles.quest_list_item}>
                        <Link to={''}>Is Reen Bank FDIC insured?</Link>
                        <img src={arrow} alt="" />
                    </div>
                    <div className={styles.quest_list_item}>
                        <Link to={''}>How can I access my Reen Bank account online?</Link>
                        <img src={arrow} alt="" />
                    </div>
                    <div className={styles.quest_list_item}>
                        <Link to={''}>What security measures does Reen Bank have in place to protect my financial information?</Link>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FAQs;