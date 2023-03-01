import React from 'react'
import { Motion, PageTitle, ServiceCard } from 'components'
import { useServicesListQuery } from "store/api/api";

export default function Services() {
    const { data, isLoading, error, refetch }: any = useServicesListQuery("", {
        refetchOnFocus: false,
    });

    return (
        <Motion>
            <PageTitle title="Xizmatlar" disc='Tashqi mehnat migratsiyasi agentligi tomonidan ko‘rsatilinadigan xizmatlar ro‘yxati' />
            
            <div className='container mt-6 mx-auto'>
            {isLoading
                ?
                Array.apply(null, Array(5)).map((val,index)=>( 
                    <div className='w-full h-18 my-3 p-4 rounded-md bg-white m-2' key={index}>
                        <div className='loaderEffect w-full h-20'></div>
                    </div>
                ))
                :
                data?.data?.map((item: any,index: any) => (
                    <ServiceCard key={index} title={item.title} category={item.category} location={item.location} price={item.price} date={item.date_string} linkReg={item.linkReg} linkVideo={item.linkVideo} />
                ))
            }
            </div>
        </Motion>
    )
}


