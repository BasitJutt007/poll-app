import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const pollApi = createApi({
    reducerPath: 'pollApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/poll' }),
    tagTypes: ['Poll'],
    endpoints: (builder) => ({

        fetchAllPolls: builder.query({
            query: () => ({
                url: '/all',
                method: 'GET',
            }),
            providesTags: ['Poll'],
        }
        ),

        submitPoll: builder.mutation({
            query: (newPoll) => ({
                url: '/submit',
                method: 'POST',
                body: newPoll,
            }),
            invalidatesTags: ['Poll'],
        }),

        deletePollById: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Poll'],
        }),

        deleteAllPolls: builder.mutation({
            query: () => ({
                url: '/deleteAll',
                method: 'DELETE',
            }),
            invalidatesTags: ['Poll'],
        }),
    }),
});

export const {
    useFetchAllPollsQuery,
    useSubmitPollMutation,
    useDeletePollByIdMutation,
    useDeleteAllPollsMutation,
} = pollApi;
