import React from 'react'
import Str from 'assets/langs'
 
export default function HeaderSearch() {
    return (
        <div>
            <form>
                <div className="relative mt-1 shadow-sm bg-[var(--bs-header-search-bg-color)] rounded-xl tooltip" data-tooltip-content="Dastur boyicha qidirish" data-tooltip-place="top">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <input type="search" className="block w-full rounded-xl !bg-transparent border-transparent !pl-12 pr-12 focus:border-[#009ef7] focus:ring-[#009ef7] sm:text-sm" placeholder={Str['search']} style={{backgroundColor:"transparent !important"}} />
                </div>
            </form>
        </div>
    )
}
