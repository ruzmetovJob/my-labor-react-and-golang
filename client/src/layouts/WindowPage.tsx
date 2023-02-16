import { useEffect, Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { Header, Loading, PageTitle } from '../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function wait(time: number) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export default function WindowPage() {
    const ref:any = useRef(null);
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0 });
        ref?.current?.continuousStart()
        // scroll to the top of the browser window when changing route
        // the window object is a normal DOM object and is safe to use in React.
        wait(Math.floor(Math.random() * 501)).then(() => {
            ref?.current?.complete();
        })
    }, [location]);



    return (
        <>
            <Header />
            <div className=''>
                <LoadingBar color="#fff" ref={ref} shadow={true} className="z-50 shadow-md shadow-white" />
                <Suspense fallback={<Loading />}>
                    <div className="transition-all w-full break-words overflow-x-hidden min-h-screen">
                        <Outlet />
                    </div>
                </Suspense>
            </div>
            <ToastContainer />
        </>
    )
}
