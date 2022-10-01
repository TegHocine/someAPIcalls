import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const facebookApi = createApi({
  reducerPath: 'facebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://graph.facebook.com/v15.0/'
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (accessToken) =>
        `me?fields=id%2Cname%2Cadaccounts%7Bname%2Cadimages%7Bcreated_time%7D%7D%2Cpicture&access_token=${accessToken}`
    }),
    getAccessPage: builder.query({
      query: (query) => `${query.id}/accounts?access_token=${query.token}`
    })
  })
})

export const { useGetUserProfileQuery, useGetAccessPageQuery } = facebookApi
