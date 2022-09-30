import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const facebookApi = createApi({
  reducerPath: 'facebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://graph.facebook.com/'
  }),
  endpoints: (builder) => ({
    getlongLivedToken: builder.query({
      query: (accessToken) =>
        `oauth/access_token?grant_type=fb_exchange_token&
      client_id=${import.meta.env.VITE_APP_ID}&
      client_secret=${import.meta.env.VITE_APP_SECRET}&
      fb_exchange_token=${accessToken}`
    }),
    getAccessPage: builder.query({
      query: (accessToken, userID) =>
        `${userID}/accounts?access_token=${accessToken}`
    })
  })
})

export const { useGetlongLivedTokenQuery, useGetAccessPageQuery } = facebookApi
