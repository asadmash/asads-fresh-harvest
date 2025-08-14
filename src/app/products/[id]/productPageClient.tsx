"use client";

import { useGetProductByIdQuery } from "@/features/api/productApi";
import { useAppSelector } from "@/hooks/reduxHooks";
import AuthModal from "@/components/AuthModal";

interface ProductPageClientProps {
  id: string;
}

export default function ProductPageClient({ id }: ProductPageClientProps) {
  const { data: product, isLoading } = useGetProductByIdQuery(id);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <AuthModal />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.productName}</h1>
      <p>{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
    </div>
  );
}
