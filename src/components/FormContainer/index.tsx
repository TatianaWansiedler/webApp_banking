import React, { FC, ReactNode } from 'react';
import s from './style.module.css'

interface Props { 
    children?: ReactNode;
    width?: string;
    height?: string
}

const FormContainer: FC<Props> = ({ children, width, height }) => {
    return (
        <div className={s.container} style={{ width, height}}>
            { children }
        </div>
    );
};

export default FormContainer;