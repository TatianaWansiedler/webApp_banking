import React, { FC } from "react";
import { Link } from 'react-router-dom';
import styles from './style.module.css'
import { Variants_btn } from '../../utils';

interface Props {
    to?: string ;
    btn_variants: Variants_btn;
    children?: string;
    height?: string;
    width?: string;
    radius?: string;
    onClick?: () => void;
}

const Button: FC<Props> = ({
    to='',
    btn_variants,
    children,
    height,
    width,
    radius,
    onClick,
}) => {
    return (
        <Link
            to={to}
            className={styles[btn_variants]}
            onClick={onClick}
            style={{
                borderRadius: radius,
                height,
                width
            }}
        >
            {children}
        </Link>
    );
}

export default Button;
