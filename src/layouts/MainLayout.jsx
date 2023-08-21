import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
// import background from '../../public/img/topography.svg'

export default function MainLayout() {
  return (
    <>
        {/* <div className='w-full min-h-screen bg-repeat' style={{backgroundImage:`url(${background})`}}> */}
        <div className='w-full min-h-screen'>
            <Header />
                <Outlet />
            <Footer />
        </div>

    </>
  );
}
