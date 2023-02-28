import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderActions from './HeaderActions'
import HeaderSearch from './HeaderSearch'


type PageTitleProps = {
    title: string
    disc: string
}

export default function Header({ title, disc = ' ' }: PageTitleProps): JSX.Element {
    // Sticky Menu Area
    useEffect(() => {
        const pageWrapper: any = document.querySelector('.page-wrapper');
        pageWrapper.addEventListener('scroll', isSticky);
        return () => {
            pageWrapper.removeEventListener('scroll', isSticky);
        };
    });
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e: any) => {
        const pageWrapper: any = document.querySelector('.page-wrapper');
        const header: any = document.querySelector('.header-section');
        const scrollTop = pageWrapper.scrollTop;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        console.log(scrollTop);
    };


    //https://preview.keenthemes.com/metronic8/demo2/assets/media/patterns/header-bg.jpg
    return (
        <header className="w-full bg-[var(--bs-header-general-bg-color)] h-[240px] sm:py-0 py-6 z-0">
                <div className="header-section bg-[var(--bs-header-general-bg-color)] flex items-center grow justify-between w-full h-full text-white py-3 mx-auto">
                    <Link to="/" className='logo-img ml-3'>
                        <img alt="Logo" src="https://preview.keenthemes.com/metronic8/demo9/assets/media/logos/demo9.svg" className="h-40px" />
                    </Link>
                    <div className="flex-col justify-start items-center ml-3 text-left">
                        <h1 className="text-white text-3xl font-semibold text-left lg:max-w-lg md:max-w-md max-w-xs  truncate ...">{title}</h1>
                        <p className="text-[var(--bs-text-gray-600)] max-w-lg">{disc}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <HeaderSearch />
                        <HeaderActions />
                    </div>
                </div>
        </header>
    )
}
