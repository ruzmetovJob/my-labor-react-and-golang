import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ResponseApi, ServiceDateEpsTopik } from "interfaces"

export const Api = createApi({
    reducerPath: "api/v2",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.eps-topik.uz/api/v2"
    }),
    refetchOnFocus: true,
    tagTypes: ["Service"],
    endpoints: (builder) => ({
        servicesList: builder.query<any,any>({
            query: () => ({
                url: "/service/"
            })
        }),
        me: builder.query<any, string>({
            query: (code: string) => ({
                url: "/me",
                params: {
                    code: code
                }
            })
        }),
        payments: builder.query<any, string>({
            query: (pinfl: string) => ({
                url: "/me/payments",
                params: {
                    pin: pinfl
                }
            }),
            transformResponse: (res: any) => res.data
        }),
        myServices: builder.query<any, any>({
            query: (pinfl: string) => ({
                url: "/me/services",
                params: {
                    pin: pinfl
                }
            }),
            providesTags: result => ["Service"],
            transformResponse: (res: any) => res.data
        }),
        myServicesOne: builder.query<any, any>({
            query: ({pinfl, service_id}:any) => ({
                url: `/me/services/${service_id}`,
                params: {
                    pin: pinfl
                }
            }),
            providesTags: result => ["Service"],
            transformResponse: (res: any) => res.data
        }),
        serviceSave: builder.mutation<ServiceDateEpsTopik, any>({
            query: (data: ServiceDateEpsTopik) => ({
                url: "/service/save",
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json"
                },
                dataType: "json"
            }),
            //invalidatesTags: ["Service"],
            transformResponse: (res: any) => res
        }),
    })
})

export const {
    useServicesListQuery,
    useMeQuery,
    usePaymentsQuery,
    useMyServicesOneQuery,
    useMyServicesQuery,
    useLazyPaymentsQuery,
    useServiceSaveMutation,
} = Api
