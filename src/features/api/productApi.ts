// import base api slice and product type
import { apiSlice } from "./apiSlice";
import {Product} from "@types/product";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get all products
        getProducts: builder.query<Product[], void>({
            query: () => '/products',
            providesTags: ['Product'],
        }),
        // get products by id
        getProductById: builder.query<Product, string>({
             query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
        }),
    })
})

// export hooks
export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;