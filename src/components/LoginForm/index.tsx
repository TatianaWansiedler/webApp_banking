import React from 'react';
import styles from './style.module.css'
import FormContainer from '../FormContainer';
import { InputAdornment, TextField } from '@mui/material';
import { EmailOutlined, LockOutlined } from '@mui/icons-material';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { Variants_btn } from '../../utils';

const LoginForm = () => {
    const onSubmit = () => {
        console.log('ok');
    }

    return (
        <div>
            <FormContainer
                width='100%'
                title='Login'
            >
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                    placeholder='Enter your Email'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <EmailOutlined />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                    placeholder='Enter your Password'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <LockOutlined />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    btn_variants={Variants_btn.CONTAINED}
                    children='Login'
                    onClick={onSubmit}
                />
                <div className={styles.login}>
                    <p>Don't Have an Account?</p>
                    <Link to={'/register_page'}>Register</Link>
                </div>

            </FormContainer>
        </div>
    );
};

export default LoginForm;