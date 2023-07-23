import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import RegisterForm from '../../components/RegisterForm';

const text = 'Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Reen Bank.'
const title = 'Experience hassle-free banking'

const RegisterPage = () => {

    return (
        <MainLayout title={title} descr={text} form={<RegisterForm/>}></MainLayout>
    );
};

export default RegisterPage;