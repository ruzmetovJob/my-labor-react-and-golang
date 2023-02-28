import React, { useContext, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useDetectOutsideClick } from "../hooks"
import MenuData from '../assets/json/Menus.json'
import Str from '../assets/langs'
import LoginButton from './LoginButton';
import { MyAppContext } from '../contexts/ThemeContext';
import LoginLink from './LoginLink';
import { ScrollLinked } from '.';

export default function Header() {
  const refProfile:any = useRef();
  const location = useLocation();
  let active_path: RegExpMatchArray | string = location?.pathname?.match(/^\/[A-za-z\-]+/g) || ''
  const [isActive, setIsActive] = useDetectOutsideClick(refProfile, false);
  const { userData } = useContext<any>(MyAppContext);

  return (
    <>
      <nav className="sticky top-0 w-full items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] hidden md:block z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0  space-x-4">
                <Link to="/"><span className="font-extrabold text-[#222328] text-[26px]">MY LABOR</span></Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 font-semibold">
                  <Link to="/services"
                    className={(active_path[0] == `/services` ? 'text-greendarkc' : 'text-gray-500') + " hover:text-greenc px-3 py-2 rounded-md text-md font-medium flex items-center transition-all"}
                    aria-current="page">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Editor" transform="translate(-48.000000, -192.000000)">
                          <g id="list_check_3_line" transform="translate(48.000000, 192.000000)">
                            <path
                              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                              id="MingCute" fillRule="nonzero"></path>
                            <path
                              d="M7,13 C8.05436227,13 8.91816517,13.81585 8.99451427,14.8507339 L9,15 L9,18 C9,19.0543909 8.18412267,19.9181678 7.14926241,19.9945144 L7,20 L4,20 C2.94563773,20 2.08183483,19.18415 2.00548573,18.1492661 L2,18 L2,15 C2,13.9456091 2.81587733,13.0818322 3.85073759,13.0054856 L4,13 L7,13 Z M16,17 C16.5523,17 17,17.4477 17,18 C17,18.51285 16.613973,18.9355092 16.1166239,18.9932725 L16,19 L12,19 C11.4477,19 11,18.5523 11,18 C11,17.48715 11.386027,17.0644908 11.8833761,17.0067275 L12,17 L16,17 Z M7,15 L4,15 L4,18 L7,18 L7,15 Z M20,13 C20.5523,13 21,13.4477 21,14 C21,14.5523 20.5523,15 20,15 L12,15 C11.4477,15 11,14.5523 11,14 C11,13.4477 11.4477,13 12,13 L20,13 Z M7,3 C8.10457,3 9,3.89543 9,5 L9,8 C9,9.10457 8.10457,10 7,10 L4,10 C2.89543,10 2,9.10457 2,8 L2,5 C2,3.89543 2.89543,3 4,3 L7,3 Z M16,7 C16.5523,7 17,7.44772 17,8 C17,8.51283143 16.613973,8.93550653 16.1166239,8.9932722 L16,9 L12,9 C11.4477,9 11,8.55228 11,8 C11,7.48716857 11.386027,7.06449347 11.8833761,7.0067278 L12,7 L16,7 Z M7,5 L4,5 L4,8 L7,8 L7,5 Z M20,3 C20.5523,3 21,3.44772 21,4 C21,4.51283143 20.613973,4.93550653 20.1166239,4.9932722 L20,5 L12,5 C11.4477,5 11,4.55228 11,4 C11,3.48716857 11.386027,3.06449347 11.8833761,3.0067278 L12,3 L20,3 Z"
                              id="形状" fill="currentColor"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    Xizmatlar
                  </Link>

                  <Link to="/ads"
                    className={(active_path[0] == `/ads` ? 'text-greendarkc' : 'text-gray-500') + " hover:text-gray-700 px-3 py-2 rounded-md text-md font-medium flex items-center transition-all"}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 13.9999L5.57465 20.2985C5.61893 20.4756 5.64107 20.5642 5.66727 20.6415C5.92317 21.397 6.60352 21.9282 7.39852 21.9933C7.4799 21.9999 7.5712 21.9999 7.75379 21.9999C7.98244 21.9999 8.09677 21.9999 8.19308 21.9906C9.145 21.8982 9.89834 21.1449 9.99066 20.193C10 20.0967 10 19.9823 10 19.7537V5.49991M18.5 13.4999C20.433 13.4999 22 11.9329 22 9.99991C22 8.06691 20.433 6.49991 18.5 6.49991M10.25 5.49991H6.5C4.01472 5.49991 2 7.51463 2 9.99991C2 12.4852 4.01472 14.4999 6.5 14.4999H10.25C12.0164 14.4999 14.1772 15.4468 15.8443 16.3556C16.8168 16.8857 17.3031 17.1508 17.6216 17.1118C17.9169 17.0756 18.1402 16.943 18.3133 16.701C18.5 16.4401 18.5 15.9179 18.5 14.8736V5.1262C18.5 4.08191 18.5 3.55976 18.3133 3.2988C18.1402 3.05681 17.9169 2.92421 17.6216 2.88804C17.3031 2.84903 16.8168 3.11411 15.8443 3.64427C14.1772 4.55302 12.0164 5.49991 10.25 5.49991Z"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Eʼlonlar
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block  z-20">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative ml-3">
                  <div className="ml-3 relative" ref={refProfile} >
                    <div>
                      <button type="button" onClick={() => setIsActive(!isActive)}
                        className="flex max-w-xs items-center rounded-full text-sm focus:outline-none text-greendarkc focus:ring-2 focus:ring-white focus:ring-offset-1"
                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9.641,9.641,0,0,1-5.209-1.674,7,7,0,0,1,10.418,0A9.167,9.167,0,0,1,12,21Zm6.694-3.006a8.98,8.98,0,0,0-13.388,0,9,9,0,1,1,13.388,0ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" />
                        </svg>
                      </button>
                    </div>
                    {isActive ?
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Sozlamalar</Link>
                        {userData?.uinfo?.pin ?
                          <Link to="/login/out" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Tizimdan chiqish</Link>
                          :
                          <LoginLink />
                        }
                        
                      </div>
                      : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      


      <div className="fixed bottom-0 bg-white w-full shadow-lg text-center visible md:invisible rounded-t-xl z-20">
        <div className="mx-4 px-1 flex justify-between">

          <Link to="/" className={(active_path[0] == undefined ? 'text-greendarkc' : 'text-gray-500') + " hover:text-gray-700 px-2 py-2 rounded-md text-sm font-small items-center justify-center"}>
            <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>Home</title>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Home">
                  <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"> </rect>
                  <path d="M5,10 L5,19 C5,19.5523 5.44772,20 6,20 L18,20 C18.5523,20 19,19.5523 19,19 L19,10" id="Path" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M21,11 L12.307,4.23875 C12.1264,4.09832 11.8736,4.09832 11.693,4.23875 L3,11" id="Path" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                </g>
              </g>
            </svg>
          </Link>

          <Link to="/services" className={(active_path[0] == `/services` ? 'text-greendarkc' : 'text-gray-500') + " hover:text-gray-700 px-2 py-2 rounded-md text-md font-medium items-center justify-center"}>
            <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto" version="1.1" xmlns="http://www.w3.org/2000/svg" >
              <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Editor" transform="translate(-48.000000, -192.000000)">
                  <g id="list_check_3_line" transform="translate(48.000000, 192.000000)">
                    <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute" fillRule="nonzero"></path>
                    <path
                      d="M7,13 C8.05436227,13 8.91816517,13.81585 8.99451427,14.8507339 L9,15 L9,18 C9,19.0543909 8.18412267,19.9181678 7.14926241,19.9945144 L7,20 L4,20 C2.94563773,20 2.08183483,19.18415 2.00548573,18.1492661 L2,18 L2,15 C2,13.9456091 2.81587733,13.0818322 3.85073759,13.0054856 L4,13 L7,13 Z M16,17 C16.5523,17 17,17.4477 17,18 C17,18.51285 16.613973,18.9355092 16.1166239,18.9932725 L16,19 L12,19 C11.4477,19 11,18.5523 11,18 C11,17.48715 11.386027,17.0644908 11.8833761,17.0067275 L12,17 L16,17 Z M7,15 L4,15 L4,18 L7,18 L7,15 Z M20,13 C20.5523,13 21,13.4477 21,14 C21,14.5523 20.5523,15 20,15 L12,15 C11.4477,15 11,14.5523 11,14 C11,13.4477 11.4477,13 12,13 L20,13 Z M7,3 C8.10457,3 9,3.89543 9,5 L9,8 C9,9.10457 8.10457,10 7,10 L4,10 C2.89543,10 2,9.10457 2,8 L2,5 C2,3.89543 2.89543,3 4,3 L7,3 Z M16,7 C16.5523,7 17,7.44772 17,8 C17,8.51283143 16.613973,8.93550653 16.1166239,8.9932722 L16,9 L12,9 C11.4477,9 11,8.55228 11,8 C11,7.48716857 11.386027,7.06449347 11.8833761,7.0067278 L12,7 L16,7 Z M7,5 L4,5 L4,8 L7,8 L7,5 Z M20,3 C20.5523,3 21,3.44772 21,4 C21,4.51283143 20.613973,4.93550653 20.1166239,4.9932722 L20,5 L12,5 C11.4477,5 11,4.55228 11,4 C11,3.48716857 11.386027,3.06449347 11.8833761,3.0067278 L12,3 L20,3 Z"
                      id="形状" fill="currentColor"></path>
                  </g>
                </g>
              </g>
            </svg>
          </Link>

          <Link to="/ads" className={(active_path[0] == `/ads` ? 'text-greendarkc' : 'text-gray-500') + " hover:text-gray-700 px-2 py-2 rounded-md text-md font-medium items-center justify-center"}>
            <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 13.9999L5.57465 20.2985C5.61893 20.4756 5.64107 20.5642 5.66727 20.6415C5.92317 21.397 6.60352 21.9282 7.39852 21.9933C7.4799 21.9999 7.5712 21.9999 7.75379 21.9999C7.98244 21.9999 8.09677 21.9999 8.19308 21.9906C9.145 21.8982 9.89834 21.1449 9.99066 20.193C10 20.0967 10 19.9823 10 19.7537V5.49991M18.5 13.4999C20.433 13.4999 22 11.9329 22 9.99991C22 8.06691 20.433 6.49991 18.5 6.49991M10.25 5.49991H6.5C4.01472 5.49991 2 7.51463 2 9.99991C2 12.4852 4.01472 14.4999 6.5 14.4999H10.25C12.0164 14.4999 14.1772 15.4468 15.8443 16.3556C16.8168 16.8857 17.3031 17.1508 17.6216 17.1118C17.9169 17.0756 18.1402 16.943 18.3133 16.701C18.5 16.4401 18.5 15.9179 18.5 14.8736V5.1262C18.5 4.08191 18.5 3.55976 18.3133 3.2988C18.1402 3.05681 17.9169 2.92421 17.6216 2.88804C17.3031 2.84903 16.8168 3.11411 15.8443 3.64427C14.1772 4.55302 12.0164 5.49991 10.25 5.49991Z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link to="/room" className={(active_path[0] == `/room` ? 'text-greendarkc' : 'text-gray-500') + " hover:text-gray-700 px-2 py-2 rounded-md text-md font-medium items-center justify-center"}>
            <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></g>
            </svg>
          </Link>

        </div>
      </div>
    </>
  )
}
