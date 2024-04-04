import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "main", 
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}), 
    tagTypes: ["Kpis"], 
    endpoints: (builder) => ({
        getKpis: builder.query({
            query: () => "Kpi/kpis", 
            providesTags: ["Kpis"]
        })
    })
})


export const { useGetKpisQuery } = api; 
