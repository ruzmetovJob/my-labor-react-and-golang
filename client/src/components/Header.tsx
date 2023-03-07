import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderActions from './HeaderActions'
import HeaderSearch from './HeaderSearch'
import bg from "../../public/imgs/herobg.png"

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
    };


    //https://preview.keenthemes.com/metronic8/demo2/assets/media/patterns/header-bg.jpg
    //linear-gradient(rgb(30 33 135 / 50%), rgb(7 2 70 / 50%), rgb(14 9 52 / 50%))
    return (
        <header className="w-full bg-[var(--bs-header-general-bg-color)] bg-cover h-[240px] sm:py-0 py-6 z-0" style={{backgroundImage: `linear-gradient(rgb(30 33 135 / 50%), rgb(7 2 70 / 50%)), url(${bg})`}}>
                <div className="header-section flex items-center grow justify-between w-full h-full text-white py-3 mx-auto z-10">
                    <Link to="/" className='logo-img ml-3'>
                        <img alt="Logo" src="/imgs/favicon-color.png" className="h-[40px]" />
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
