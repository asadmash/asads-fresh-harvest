"use client";

import { useParams } from "next/navigation";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "@/features/api/productApi";
import ProductCard from "./ProductCard";

export default function RelatedProducts() {
  const { id } = useParams();

  //Fetch current product
  const { data: productData, isLoading: productLoading } =
    useGetProductByIdQuery(id as string);

  //Fetch all products 
  const { data: allProductsData, isLoading: allProductsLoading } =
    useGetProductsQuery();

  // filter products
  const filteredProducts = allProductsData?.data.filter(
    (p) =>
      p.categoryId === productData?.data?.categoryId && // same category
      p.id !== productData?.data?.id // exclude current product
  );

  if (productLoading || allProductsLoading)
    return <div>Loading related products...</div>;

  return (
     <div className="flex flex-wrap animate-fadeIn -mx-4">
      {filteredProducts?.length
        ? filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
            >
              <ProductCard product={product} />
            </div>
          ))
        : <p className="w-full text-center">No related products found.</p>}
    </div>
  );
}
