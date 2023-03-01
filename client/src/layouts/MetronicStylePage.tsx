import { useEffect, Suspense, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { AsideMenu, MobileMenu, PageLoader } from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import React from 'react';


function wait(time: number) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export default function MetronicStylePage():JSX.Element {
    const ref: any = useRef(null);
    const location = useLocation();
    const wrapper:any = React.createRef();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        ref?.current?.continuousStart();
        wait(Math.floor(Math.random() * 501)).then(() => {
            ref?.current?.complete();
        })
    }, [location]);

    return (

        <div ref={wrapper} className="flex flex-row min-h-screen relative" data-bs-theme="light">
            <AsideMenu/>
            <div className='page-wrapper w-full break-words bg-[#f9fafe] max-h-screen overflow-y-scroll overflow-x-hidden !relative'>
                <LoadingBar color="linear-gradient(90deg, #009ef7 0%, #009ef7 100%)" height={3} ref={ref} shadow={true} className="z-50 shadow-md" />
                <MobileMenu />
                <Suspense fallback={<PageLoader/>}>
                        <div className="w-full break-words" >
                            <Outlet />
                        </div>
                </Suspense>
            </div>
            <ToastContainer />
            <Tooltip id="my-tooltip" anchorSelect=".tooltip" className='z-50' />
        </div>
    )
}
