"use client";

import { useParams } from "next/navigation";
import { useGetProductByIdQuery } from "@/features/api/productApi";
import { useAppSelector } from "@/hooks/reduxHooks";
import AuthModal from "@/components/AuthModal";

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params?.id;

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const { data: product, isLoading } = useGetProductByIdQuery(productId as string);

  if (!isAuthenticated) return <AuthModal />;
  if (!productId) return <p>Invalid product</p>;
  if (isLoading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.productName}</h1>
      <p>{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
    </div>
  );
}
