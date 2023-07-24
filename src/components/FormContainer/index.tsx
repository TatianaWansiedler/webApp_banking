import React, { FC, ReactNode } from 'react';
import styles from './style.module.css'

interface FormContainerProps { 
    width?: string;
    height?: string;
    children: ReactNode;
    title?: string;
}

const FormContainer: FC<FormContainerProps> = ({ width, height, children, title }) => {
    return (
        <div className={styles.container} style={{ width, height }}>
            <h2 className={ styles.title }>{title}</h2>
            { children }
        </div>
    );
};

export default FormContainer;