import { useEffect, useState } from "react"
import { useLazyPaymentsQuery, usePaymentsQuery } from "../store/api/api"
import { errorNotify } from "../utils"

type BannerProps = {
    pin: string,
    give: any
}

export default function BannerPayments(props :BannerProps) {
   
   /* const {isLoading, isError, data} = usePaymentsQuery(props.pin,{
        refetchOnFocus: true,
    })*/

    const [fetchPayment, {isFetching, error, data}]:any = useLazyPaymentsQuery({
        refetchOnFocus: false,
    })

    useEffect(() => {
        fetchPayment(props.pin)
    },[])

    useEffect(() => {
        if(data?.length > 0){
            props.give(data)
        }
    },[data])

    useEffect(() => {
        if(error?.status=="FETCH_ERROR") {
            errorNotify("Serverga sorovda xatolik \n useLazyPaymentsQuery \n"+error?.error)
            console.log(error);
        }
    },[error])

    const updatePayment = () => {        
        fetchPayment(props.pin)
    } 

    return (
        <div className="bg-teal-400 rounded-md my-2">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 items-center">
                        <span className="flex rounded-lg bg-teal-500 p-2">
                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <p className="ml-3 truncate font-medium text-white">
                            <span className="md:hidden">Koreys tili bo‘yicha EPS-TOPIK test imtihoni uchun to`lov</span>
                            <span className="hidden md:inline text-white">Koreys tili bo‘yicha EPS-TOPIK test imtihoni uchun to`lov</span>
                        </p>
                    </div>
                    <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                        {!isFetching ? (
                            <button type="button" onClick={updatePayment} className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-teal-600 bg-white hover:bg-teal-100 transition ease-in-out duration-150 cursor-pointer">
                                Qayta tekshirish
                            </button>
                        ) 
                        :
                         (
                            <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-teal-600 bg-white hover:bg-teal-400 transition ease-in-out duration-150 cursor-not-allowed">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Yuklanmoqda...
                            </button>
                        )}
                        
                        
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button type="button" className="-mr-1 flex rounded-md p-2 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                            <span className="sr-only">Dismiss</span>
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                {!isFetching && data?.length <= 0 && (
                    <>
                    <p className="mt-2 w-full text-red-600">Milliy Bank orqali to`langan to`lov tog`risida ma`lumotlar topilmadi ... </p>
                    {/*<p className="mt-0 w-full text-red-600">Agarda to`lovni boshqa to`lov usullari bilan amalga oshirgan bo`lsangiz kvitansiyani yuklang </p>*/}
                    </>
                )}
            </div>
        </div>
    )

}