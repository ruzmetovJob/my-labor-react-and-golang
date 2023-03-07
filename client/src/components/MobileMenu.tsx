import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDetectOutsideClick } from 'hooks';

type MobileMenuProps = {
    hadleToggle: (state: any) => void,
    initialState: boolean
}

export default function MobileMenu() {
    const refProfile: any = useRef();
    const [isActive, setIsActive] = useDetectOutsideClick(refProfile, false);
    useEffect(() => {
        console.log(isActive)
        
    }, [isActive]);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="sm:hidden block flex justify-between items-center bg-[var(--bs-header-mobile-bg-color)] p-3 shadow-sm">
            <div className="container flex  justify-between items-center">
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                    <Link to="/">
                        <img alt="Logo" src="/imgs/labor-migration-color-logo.png" className="h-[40px]" />
                    </Link>
                </div>
                <button className="btn btn-icon btn-active-color-primary cursor-pointer hover:text-[var(--bs-primary)] focus:text-[var(--bs-primary)] focus:outline-0" id="kt_aside_toggle" ref={refProfile} onClick={() => setIsActive(true)}>
                    <span className="svg-icon svg-icon-2x me-n1">
                        {!isActive ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor"></path>
                            </svg>
                            :
                            <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="currentColor">
                                        <rect x="0" y="7" width="16" height="2" rx="1" />
                                        <rect opacity="0.3" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000) " x="0" y="7" width="16" height="2" rx="1" />
                                    </g>
                                </g>
                            </svg>
                        }
                    </span>
                </button>
            </div>
        </div>
    )
}
