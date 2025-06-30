import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto min-h-screen bg-[var(--color-primary)]'>
            <Header />
            <div className='min-h-screen'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;