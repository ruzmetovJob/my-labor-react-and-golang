import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginButton, PageTitle } from '../components'
import { MyAppContext } from '../contexts/ThemeContext';
import defavatar from "/public/imgs/0.png";

export default function Room() {
  const [selectedImage, setSelectedImage] = useState(defavatar);
  const { userData } = useContext<any>(MyAppContext);
  return (
    <>
      <PageTitle title="Mening sahifam" />
      <div className='container  mx-auto'>

      {userData?.uinfo?.pin &&
        <div className="mt-2 flex items-center px-4">
          <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
            <img src={selectedImage} />
          </span>
          
          <h2 className='font-semibold ml-2'>{userData?.uinfo?.full_name}</h2>
        </div>
      }

        <Link to="#" className="block text-gray-700 rounded-lg py-3 px-7 text-center text-base font-medium bg-white hover:bg-gray-50 border hover:border-teal-400 sm:px-10 lg:px-8 xl:px-10 m-4 shadow-sm">Sozlamalar</Link>
        {userData?.uinfo?.pin ?
          <Link to="/login/out" className="block text-gray-700 rounded-lg py-3 px-7 text-center text-base font-medium bg-white hover:bg-gray-50 border hover:border-teal-400 sm:px-10 lg:px-8 xl:px-10 m-4 shadow-sm">Tizimdan chiqish</Link>
          :
          <div className='block py-3 px-7 text-center w-full'>
            <LoginButton />
          </div>
        }
      </div>
    </>
  )
}
