import React, { useEffect } from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Str from '../assets/langs'
import LoginButton from './LoginButton';

export default function Hero() {

    return (
        <div className="isolate bg-white">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2dd4bf"></stop>
                            <stop offset="1" stopColor="#9089FC"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <main className=''>
                <div className="relative px-6 lg:px-8 min-h-full">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Foydalanish bo`yicha yoriqnoma. <a href="https://www.youtube.com/watch?v=nz9JJWW3DBE" target="_blank" className="font-semibold text-teal-600"><span className="absolute inset-0" aria-hidden="true"></span>Video  <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">EPS-TOPIK 2023<br /> Test imtihonlari</h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Koreya Respublikasiga vaqtinchalik mehnat faoliyatini amalga oshirish uchun 2023 yilda rejalashtirilayotgan test imtihonida qatnashish</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link to="/services/test-2023" className="rounded-md bg-teal-400 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-teal-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Ro‘yxatdan o‘tish</Link>
                                <Link to="/services" className="text-base font-semibold leading-7 text-gray-900">Barcha xizmatlar <span aria-hidden="true">→</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                        <svg className="relative left-[calc(50%+3rem)] h-[11.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[22.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                            <defs>
                                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#2dd4bf"></stop>
                                    <stop offset="1" stopColor="#9089FC"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </main>
        </div>
    )
}
