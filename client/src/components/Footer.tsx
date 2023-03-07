import React from 'react'
import { Link } from 'react-router-dom';
import packageJson from '../../package.json';
import bg from "../../public/imgs/herobg.png"

export default function Footer() {
    return (
        <footer className="max-w-8xl py-4 px-6 mx-auto bg-secondary">

            <div className="w-full flex flex-col sm:flex-row justify-between">
                <div className="text-dark text-sm md:order-2">
                    <span className="text-gray-400 font-semibold me-1">Bundle version - </span> <code>v{packageJson.version}</code>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-primary float-left' viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <polygon points="0 0 24 0 24 24 0 24" />
                            <path d="M9.26193932,16.6476484 C8.90425297,17.0684559 8.27315905,17.1196257 7.85235158,16.7619393 C7.43154411,16.404253 7.38037434,15.773159 7.73806068,15.3523516 L16.2380607,5.35235158 C16.6013618,4.92493855 17.2451015,4.87991302 17.6643638,5.25259068 L22.1643638,9.25259068 C22.5771466,9.6195087 22.6143273,10.2515811 22.2474093,10.6643638 C21.8804913,11.0771466 21.2484189,11.1143273 20.8356362,10.7474093 L17.0997854,7.42665306 L9.26193932,16.6476484 Z" fill="currentColor" fillRule="nonzero" opacity="0.3" transform="translate(14.999995, 11.000002) rotate(-180.000000) translate(-14.999995, -11.000002) " />
                            <path d="M4.26193932,17.6476484 C3.90425297,18.0684559 3.27315905,18.1196257 2.85235158,17.7619393 C2.43154411,17.404253 2.38037434,16.773159 2.73806068,16.3523516 L11.2380607,6.35235158 C11.6013618,5.92493855 12.2451015,5.87991302 12.6643638,6.25259068 L17.1643638,10.2525907 C17.5771466,10.6195087 17.6143273,11.2515811 17.2474093,11.6643638 C16.8804913,12.0771466 16.2484189,12.1143273 15.8356362,11.7474093 L12.0997854,8.42665306 L4.26193932,17.6476484 Z" fill="currentColor" fillRule="nonzero" transform="translate(9.999995, 12.000002) rotate(-180.000000) translate(-9.999995, -12.000002) " />
                        </g>
                    </svg>&#160;
                    <span className="text-gray-400 font-semibold me-1">Created by</span>
                    <a href="#" target="_blank" className="text-muted text-primary font-semibold me-2 fs-6"> Ruzmetov Jobir</a>.
                </div>
                <ul className="flex md:order-1">
                    <li className="menu-item"><Link to="https://keenthemes.com" target="_blank" className="text-gray-400 hover:text-white px-2">About</Link></li>

                    <li className="menu-item"><Link to="https://devs.keenthemes.com" target="_blank" className="text-gray-400 hover:text-white px-2">Support</Link></li>

                    <li className="menu-item"><Link to="https://1.envato.market/EA4JP" target="_blank" className="text-gray-400 hover:text-white px-2">Purchase</Link></li>
                </ul>


            </div>
        </footer>
    )
}
