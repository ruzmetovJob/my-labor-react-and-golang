import React, { useEffect, useState } from 'react'

const getLang = () => {
    let lang = localStorage.getItem('lang');
    if(!lang){
        localStorage.setItem('lang','oz')
        lang = 'oz'
    }
    return lang || 'oz'
};



const getUser = () => {
    let userData = localStorage.getItem('userData') || '[]';
    return JSON.parse(userData)
};

export const MyAppContext = React.createContext({});

type ProviderProps = {
    children:any
}

export default function MyAppContextProvider({children} :ProviderProps ) {
    const [lang , setLang ] = useState(getLang())
    const [userData , setUserData ] = useState(getUser())

    useEffect(function(){
        console.log("Change User Data",userData)
    },[userData])


    const changeLang = (lang:string) => {
        if(lang=='oz' || lang=='ru' || lang=='en'){
            setLang(lang)
            localStorage.setItem('lang',lang)
        }else{
            setLang('oz')
            localStorage.setItem('lang','oz')
        }
    }

    const setUser = (data:any) => {
        if(data?.uinfo?.pin){
            localStorage.setItem('has_login','1')
            localStorage.setItem('userData',JSON.stringify(data))
            setUserData(data)
        }
    }

    const userOut = () => {
        if(userData?.uinfo?.pin){
            localStorage.setItem('has_login','0')
            localStorage.setItem('userData','[]')
            setUserData('[]')
        }
    }

  return ( 
    <MyAppContext.Provider value={{ lang , userData, changeLang, setUser, userOut }}>
        {children}
    </MyAppContext.Provider>
  )
}
