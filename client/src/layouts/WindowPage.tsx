import { useEffect, Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { Header, Loader, SmoothScroll } from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function wait(time: number) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export default function WindowPage() {
    const ref: any = useRef(null);
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
            <Header title={''} disc={''} />
            <div className='sm:py-8 p-0 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
                <LoadingBar color="linear-gradient(90deg, #20AA3E 0%, #03A588 100%)" ref={ref} shadow={true} className="z-50 shadow-md" />
                <Suspense fallback={<Loader />}>
                    <div className="w-full break-words" >
                        <Outlet />
                    </div>
                </Suspense>
            </div>
            <ToastContainer />
        </>
    )
}
