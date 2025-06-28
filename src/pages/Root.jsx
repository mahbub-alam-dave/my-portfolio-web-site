import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto shadow min-h-screen'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;