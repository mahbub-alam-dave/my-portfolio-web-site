
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {

    return (
        <div className=' min-h-screen bg-[var(--color-primary)] w-full'>
            <Header />
            <div className='min-h-screen mt-[80px] bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)]'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;