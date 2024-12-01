import { api } from './index'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: (params) => ({ 
        url: '/users', 
        params 
      }),
      providesTags: ["Users"]
    }),
    createUser: build.mutation({
      query: (body)=> ({
        url: "/users",
        method: "POST",
        body
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: build.mutation({
      query: (id)=> ({
        url: `/users/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ['Users']
    }),
    editUser : build.mutation({
      query: ({id, body})=> ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ['Users']
    })
  }),
})

export const {useGetProductQuery, useCreateUserMutation, useDeleteUserMutation, useEditUserMutation} = productApi