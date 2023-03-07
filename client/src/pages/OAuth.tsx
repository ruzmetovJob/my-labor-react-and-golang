import React, { Suspense, useContext, useEffect } from 'react'
import { Link, useLoaderData, defer, Await, useNavigate } from 'react-router-dom'
import { MyAppContext } from 'contexts/ThemeContext';
import Str from 'assetss/langs'
import { Loading, LoginButton } from 'components'
import { toast } from 'react-toastify';


const succesNotify = (text:string) => toast.success(text, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});
const errorNotify = (text:string) => toast.error(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export default function OAuth() {
    const response: any = useLoaderData() || {}
    const { setUser } = useContext<any>(MyAppContext);
    const navigate = useNavigate()

    const go = () => {
        succesNotify("Xush kelibsiz!")
        setUser(response.data);
        //navigate(-1)
        window.location.pathname = "/services/test-2023"
    }

    return (
        <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px] px-4 min-h-full">
            <div className="container mx-auto z-10">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="hero-content z-10  mx-6 relative bg-white/70 text-center">

                            <Suspense fallback={<>
                                <h1 className="text-dark text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                                    {Str['oneID-response-wait']}
                                </h1>
                                <Loading />
                            </>
                            }>
                                <Await resolve={response}>
                                    {response.success ?
                                        <>{go()}</>
                                        :
                                        <>
                                        <span className='hidden'>{errorNotify(Str['something-went-wrong'])}</span>
                                            <h1 className="text-dark text-4xl font-bold mx-6 leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                                                {Str['something-went-wrong']}
                                            </h1>
                                            <p className='text-sky-800'>{Str['try-again']}</p>
                                            <div className='mt-2 mb-4'>
                                                <LoginButton />
                                            </div>
                                        </>
                                    }

                                </Await>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const getUser = (code: string) => {
    return fetch(`https://api.eps-topik.uz/api/v2/me?code=${code}&state=`).then((response) => {
        // Always gets a response, unless there is network error
        // It never throws an error for 4xx or 5xx response 😟
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
        }
        return { success: false, error: [] }
    }).catch((error) => {
        // Only network error comes here
        return { success: false, error }
    });
}

export const oauthLoader = async ({ request, params }: any) => {
    
    const searchParams = (new URL(request.url)).searchParams
    const code = searchParams.get('code') || ''
    


    return defer(await getUser(code))
}
