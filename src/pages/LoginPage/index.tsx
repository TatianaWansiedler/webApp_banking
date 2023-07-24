import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import LoginForm from '../../components/LoginForm';

const title = 'Welcome Back'
const text = 'Enter Your Details to login to your Banking Dashboard again!'

const LoginPage = () => {
    return (
        <MainLayout title={title} descr={text} form={<LoginForm/>}></MainLayout>
    );
};

export default LoginPage;