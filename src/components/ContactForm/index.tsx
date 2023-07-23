import React from 'react';
import FormContainer from '../FormContainer';
import { InputAdornment, MenuItem, TextField } from '@mui/material';
import Button from '../Button';
import { Variants_btn } from '../../utils';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import styles from './style.module.css'

const subjects = [ 'subject1', 'subject2', 'subject3'];

const ContactForm = () => {
    const onSubmit = () => { 
        console.log('ok');  
    }
    return (
        <div>
            <FormContainer width='100%'>
                <h2 className={ styles.title}>
                    Contact Form
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
                    label="Topic"
                    variant="outlined"
                    name="topic"
                    select
                    // helperText="Please select topic"
                >
                    {
                        subjects.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))
                    }
                </TextField>
                <TextField
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                />
                <Button
                    btn_variants={Variants_btn.CONTAINED}
                    children='Submit'
                    onClick={onSubmit}
                />
            </FormContainer>
        </div>
    );
};

export default ContactForm;