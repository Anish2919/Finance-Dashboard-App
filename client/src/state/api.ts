// import { KPIAttributes,ProductResponse } from "@/utils/api.interface";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    reducerPath: 'main', 
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/'
    }), 
    tagTypes: ['Kpis', 'Products', 'Transactions'], 
    endpoints: (build) => ({
        // This query accepts a void and returns a kpiAttribute types. 
        getKpis: build.query<Array<GetKpisResponse>, void>({
            // note: an optional 'queryFn' can be used in place of query
            query: () => ({url: 'kpi/kpis'}), 
            providesTags: ["Kpis"]
            // pick out data and prevent nested properties in a hook or selector
            // transformResponse: (response: {data: KPIAttributes}, meta, args) => response.data, 
            // // pick out errors and prevent nested properties in a hook or selector 
            // transformErrorResponse: (
            //     response: {status: string | number}, 
            //     meta, 
            //     arg
            // ) => response.status, 
            // providesTags: (result, error, id) => [{type: 'Kpi', id}]
        }), 
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => ({url: 'product/products'}), 
            providesTags: ["Products"]
        }), 
        // deleteProduct: build.query<>({
        //     query: () => (), 
        // })
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => '/transactions/transactions',
            providesTags: ["Transactions"]
        })
    })
});  

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api; 


// export const api = createApi({
//     reducerPath: "main", 
//     baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}), 
//     tagTypes: ["Kpis"], 
//     endpoints: (builder) => ({
//         getKpis: builder.query<{data: string}, void>({
//             query: () => "/Kpi/kpis", 
//             providesTags: ["Kpis"]
//         })
//     })
// })

// export const { useGetKpisQuery } = api; 
