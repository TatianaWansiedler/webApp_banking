import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import ContactForm from '../../components/ContactForm';

const ContactUsPage = () => {
    const text = 'Have any questions or concerns? Contact us by filling out the form below. Don’t forget to also check out our FAQ page!'
    return (
        <MainLayout title={'Contact Us'} descr={text} form={<ContactForm/>}></MainLayout>
    );
};

export default ContactUsPage;