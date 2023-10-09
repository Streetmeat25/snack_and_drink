import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const dishApi = createApi({
    reducerPath: 'dishApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Dish'],
    endpoints: (builder) => ({
        fetchAllDishes: builder.query({
            query: () => ({
                    url: `/dishes`,

            })
        }),
    }),

})