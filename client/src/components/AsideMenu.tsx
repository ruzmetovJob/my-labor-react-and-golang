import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Logo} from '.';


export default function AsideMenu() {
    const location = useLocation();
    let active_path: RegExpMatchArray | string = location?.pathname?.match(/^\/[A-za-z\-]+/g) || '-'

    useEffect(() => {
        const pageWrapper: any = document.querySelector('.page-wrapper');
        //pageWrapper.addEventListener('scroll', isSticky);
        return () => {
           // pageWrapper.removeEventListener('scroll', isSticky);
        };
    });
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e: any) => {
        const pageWrapper: any = document.querySelector('.page-wrapper');
        const header: any = document.querySelector('.logo-aside');
        const scrollTop = pageWrapper.scrollTop;
        scrollTop >= 250 ? header.classList.add('opacity-0') : header.classList.remove('opacity-0');
    };

    return (
        <div className="bg-white p-4 shadow-lg sm:flex hidden flex-col min-w-[140px] z-50 justify-between">
            <div className="aside-logo flex-column-auto pt-10 pt-lg-20 mx-auto">
                <Link to="/" className='logo-asides'>
                    <Logo />
                </Link>
            </div>
            <div className="h-full flex flex-col mx-auto justify-center my-24 py-2 gap-7">
                <div>
                    <Link to="/">
                        <span className="flex justify-center items-center cursor-pointer tooltip" data-tooltip-content="Bosh sahifa" data-tooltip-place="right">
                            <span className={((active_path[0] == `/` || active_path[0] == '-') ? 'bg-[var(--bs-aside-menu-icon-bg-color-active)] text-white' : 'text-[var(--bs-text-gray-400)]  hover:text-[var(--bs-primary)]') + " menu-icon "}>
                                <span className="svg-icon svg-icon-2x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <path d="M3.95709826,8.41510662 L11.47855,3.81866389 C11.7986624,3.62303967 12.2013376,3.62303967 12.52145,3.81866389 L20.0429,8.41510557 C20.6374094,8.77841684 21,9.42493654 21,10.1216692 L21,19.0000642 C21,20.1046337 20.1045695,21.0000642 19,21.0000642 L4.99998155,21.0000673 C3.89541205,21.0000673 2.99998155,20.1046368 2.99998155,19.0000673 L2.99999828,10.1216672 C2.99999935,9.42493561 3.36258984,8.77841732 3.95709826,8.41510662 Z M10,13 C9.44771525,13 9,13.4477153 9,14 L9,17 C9,17.5522847 9.44771525,18 10,18 L14,18 C14.5522847,18 15,17.5522847 15,17 L15,14 C15,13.4477153 14.5522847,13 14,13 L10,13 Z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </span>
                            </span>
                        </span>
                    </Link>
                </div>
                <div>
                    <Link to="/services">
                        <span className="flex justify-center items-center cursor-pointer tooltip" data-tooltip-content="Xizmatlar" data-tooltip-place="right">
                            <span className={(active_path[0] == `/services` ? 'bg-[var(--bs-aside-menu-icon-bg-color-active)] text-white' : 'text-[var(--bs-text-gray-400)]  hover:text-[var(--bs-primary)]') + " menu-icon "}>
                                <span className="svg-icon svg-icon-2x">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
                                    </svg>
                                </span>
                            </span>
                        </span>
                    </Link>
                </div>
                <div>
                    <Link to="/blog">
                        <span className="flex justify-center items-center cursor-pointer tooltip" data-tooltip-content="Axborotlar & Yangiliklar" data-tooltip-place="right">
                            <span className={(active_path[0] == `/blog` ? 'bg-[var(--bs-aside-menu-icon-bg-color-active)] text-white' : 'text-[var(--bs-text-gray-400)]  hover:text-[var(--bs-primary)]') + " menu-icon "}>
                                <span className="svg-icon svg-icon-2x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <path d="M13.6855025,18.7082217 C15.9113859,17.8189707 18.682885,17.2495635 22,17 C22,16.9325178 22,13.1012863 22,5.50630526 L21.9999762,5.50630526 C21.9999762,5.23017604 21.7761292,5.00632908 21.5,5.00632908 C21.4957817,5.00632908 21.4915635,5.00638247 21.4873465,5.00648922 C18.658231,5.07811173 15.8291155,5.74261533 13,7 C13,7.04449645 13,10.79246 13,18.2438906 L12.9999854,18.2438906 C12.9999854,18.520041 13.2238496,18.7439052 13.5,18.7439052 C13.5635398,18.7439052 13.6264972,18.7317946 13.6855025,18.7082217 Z" fill="currentColor" />
                                            <path d="M10.3144829,18.7082217 C8.08859955,17.8189707 5.31710038,17.2495635 1.99998542,17 C1.99998542,16.9325178 1.99998542,13.1012863 1.99998542,5.50630526 L2.00000925,5.50630526 C2.00000925,5.23017604 2.22385621,5.00632908 2.49998542,5.00632908 C2.50420375,5.00632908 2.5084219,5.00638247 2.51263888,5.00648922 C5.34175439,5.07811173 8.17086991,5.74261533 10.9999854,7 C10.9999854,7.04449645 10.9999854,10.79246 10.9999854,18.2438906 L11,18.2438906 C11,18.520041 10.7761358,18.7439052 10.4999854,18.7439052 C10.4364457,18.7439052 10.3734882,18.7317946 10.3144829,18.7082217 Z" fill="currentColor" opacity="0.3" />
                                        </g>
                                    </svg>
                                </span>
                            </span>
                        </span>
                    </Link>
                </div>
                <div>
                    <Link to="/help">
                        <span className="flex justify-center items-center cursor-pointer tooltip" data-tooltip-content="Yordam & Bog`lanish" data-tooltip-place="right">
                            <span className={(active_path[0] == `/help` ? 'bg-[var(--bs-aside-menu-icon-bg-color-active)] text-white' : 'text-[var(--bs-text-gray-400)]  hover:text-[var(--bs-primary)]') + " menu-icon "}>
                                <span className="svg-icon svg-icon-2x">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M2.10001 10C3.00001 5.6 6.69998 2.3 11.2 2L8.79999 4.39999L11.1 7C9.60001 7.3 8.30001 8.19999 7.60001 9.59999L4.5 12.4L2.10001 10ZM19.3 11.5L16.4 14C15.7 15.5 14.4 16.6 12.7 16.9L15 19.5L12.6 21.9C17.1 21.6 20.8 18.2 21.7 13.9L19.3 11.5Z" fill="currentColor"></path>
                                        <path d="M13.8 2.09998C18.2 2.99998 21.5 6.69998 21.8 11.2L19.4 8.79997L16.8 11C16.5 9.39998 15.5 8.09998 14 7.39998L11.4 4.39998L13.8 2.09998ZM12.3 19.4L9.69998 16.4C8.29998 15.7 7.3 14.4 7 12.8L4.39999 15.1L2 12.7C2.3 17.2 5.7 20.9 10 21.8L12.3 19.4Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="aside-logo flex-column-auto pb-2 pt-lg-20 mx-auto">
                <Link to="/sign-out">
                    <span className="flex justify-center items-center cursor-pointer tooltip" data-tooltip-content="Tzimdan chiqish" data-tooltip-place="right">
                        <span className={(active_path[0] == `/sign-out` ? 'bg-[var(--bs-aside-menu-icon-bg-color-active)] text-white' : 'text-[var(--bs-text-gray-400)]  hover:text-[var(--bs-primary)]') + " menu-icon "}>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <rect x="0" y="0" width="24" height="24" />
                                        <path d="M14.0069431,7.00607258 C13.4546584,7.00607258 13.0069431,6.55855153 13.0069431,6.00650634 C13.0069431,5.45446114 13.4546584,5.00694009 14.0069431,5.00694009 L15.0069431,5.00694009 C17.2160821,5.00694009 19.0069431,6.7970243 19.0069431,9.00520507 L19.0069431,15.001735 C19.0069431,17.2099158 17.2160821,19 15.0069431,19 L3.00694311,19 C0.797804106,19 -0.993056895,17.2099158 -0.993056895,15.001735 L-0.993056895,8.99826498 C-0.993056895,6.7900842 0.797804106,5 3.00694311,5 L4.00694793,5 C4.55923268,5 5.00694793,5.44752105 5.00694793,5.99956624 C5.00694793,6.55161144 4.55923268,6.99913249 4.00694793,6.99913249 L3.00694311,6.99913249 C1.90237361,6.99913249 1.00694311,7.89417459 1.00694311,8.99826498 L1.00694311,15.001735 C1.00694311,16.1058254 1.90237361,17.0008675 3.00694311,17.0008675 L15.0069431,17.0008675 C16.1115126,17.0008675 17.0069431,16.1058254 17.0069431,15.001735 L17.0069431,9.00520507 C17.0069431,7.90111468 16.1115126,7.00607258 15.0069431,7.00607258 L14.0069431,7.00607258 Z" fill="currentColor" fillRule="nonzero" opacity="0.3" transform="translate(9.006943, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-9.006943, -12.000000) " />
                                        <rect fill="currentColor" opacity="0.3" transform="translate(14.000000, 12.000000) rotate(-270.000000) translate(-14.000000, -12.000000) " x="13" y="6" width="2" height="12" rx="1" />
                                        <path d="M21.7928932,9.79289322 C22.1834175,9.40236893 22.8165825,9.40236893 23.2071068,9.79289322 C23.5976311,10.1834175 23.5976311,10.8165825 23.2071068,11.2071068 L20.2071068,14.2071068 C19.8165825,14.5976311 19.1834175,14.5976311 18.7928932,14.2071068 L15.7928932,11.2071068 C15.4023689,10.8165825 15.4023689,10.1834175 15.7928932,9.79289322 C16.1834175,9.40236893 16.8165825,9.40236893 17.2071068,9.79289322 L19.5,12.0857864 L21.7928932,9.79289322 Z" fill="currentColor" fillRule="nonzero" transform="translate(19.500000, 12.000000) rotate(-90.000000) translate(-19.500000, -12.000000) " />
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </span>
                </Link>
            </div>
        </div>
    )
}
