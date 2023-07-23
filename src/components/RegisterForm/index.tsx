import React from 'react';
import FormContainer from '../FormContainer';
import { Checkbox, InputAdornment, TextField } from '@mui/material';
import Button from '../Button';
import { Variants_btn } from '../../utils';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './style.module.css'
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const onSubmit = () => { 
        console.log('ok');  
    }

    return (
        <div>
            <FormContainer width='100%'>
                <h2 className={ styles.title}>
                    Register
                </h2>
                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    type="text"
                    placeholder='Enter name here'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <PersonOutlineOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                    placeholder='Enter your Email'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <EmailOutlinedIcon/>
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
                                <LockOutlinedIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
                
                <div className={ styles.checkbox }>
                    <Checkbox
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            color: "var(--secondary-green)",
                            '&.Mui-checked': {
                            color: "var(--secondary-green)",
                            },
                        }}
                    />
                    <p>
                        I agree to all
                        the <Link className={styles.policy} to={'/'}>
                            Terms, Privacy Policy
                        </Link> and  <Link className={styles.policy} to={'/'}>Fees.</Link>
                    </p>
                </div>    
                <Button
                    btn_variants={Variants_btn.CONTAINED}
                    children='Register'
                    onClick={onSubmit}
                />
                <div className={ styles.login }>
                    <p>Already have an Account?</p>
                    <Link to={'/login_page'}>Log in.</Link>
                </div>

            </FormContainer>
        </div>
    );
};

export default RegisterForm;