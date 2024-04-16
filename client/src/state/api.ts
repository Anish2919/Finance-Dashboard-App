import { KPIAttributes } from "@/utils/api.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/'
    }), 
    tagTypes: ['Kpi'], 
    reducerPath: 'Kpi', 
    endpoints: (build) => ({
        // This query accepts a void and returns a kpiAttribute types. 
        getKpis: build.query<KPIAttributes, void>({
            // note: an optional 'queryFn' can be used in place of query
            query: () => ({url: 'kpi/kpis'}), 
            // pick out data and prevent nested properties in a hook or selector
            // transformResponse: (response: {data: KPIAttributes}, meta, args) => response.data, 
            // // pick out errors and prevent nested properties in a hook or selector 
            // transformErrorResponse: (
            //     response: {status: string | number}, 
            //     meta, 
            //     arg
            // ) => response.status, 
            // providesTags: (result, error, id) => [{type: 'Kpi', id}]
        })
    })
}); 

export const { useGetKpisQuery } = api; 


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
