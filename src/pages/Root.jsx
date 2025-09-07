
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {

    return (
        <div className=' min-h-screen w-full bg-gray-50 dark:bg-[var(--color-bg-dark)] [background-image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]
     dark:[background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] 
     [background-size:60px_60px] [background-position:center]'>
            <Header />
            {/* bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] mt-[80px] pt-16*/}
            <div className=''>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;