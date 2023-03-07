import React, { useContext } from 'react'

import esi_config from 'configs/config_esi.json'
import Str from 'assetss/langs'
import { MyAppContext } from 'contexts/ThemeContext';
import { Link } from 'react-router-dom';

export default function LoginButton() {
    const { userData } = useContext<any>(MyAppContext);
    if(!userData?.uinfo?.pin){
        return (
            <form name="OAuthForm" action={esi_config['oneIdUrl']} method="get">
                <input type="hidden" name="response_type" value="one_code" />
                <input type="hidden" name="client_id" value={esi_config['oneIdClientId']} />
                <input type="hidden" name="redirect_uri" value={esi_config['oneIdredirectUri']} />
                <input type="hidden" name="scope" value={esi_config['oneIdClientId']} />
                <input type="hidden" name="state" value={esi_config['oneIdState']} />
                <button type="submit" className="bg-teal-500 inline-flex items-center justify-center rounded-lg py-3 px-7 text-center text-base font-medium text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10  z-10">{Str['sign-in']}</button>
            </form>
        )
    }else{
        return (
            <Link to="/" className="bg-white hover:bg-teal-800 border border-2 border-teal-600 hover:border-teal-500 transition-all inline-flex items-center justify-center rounded-lg py-3 px-7 text-center text-base font-medium text-sky-800 hover:text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10  z-10">
                <img src={userData?.lm?.images?.result} className='w-6 h-6 mr-3 rounded-full border border-2 border-teal-800' />{userData?.uinfo?.first_name}
            </Link>
            )
    }
    
}
