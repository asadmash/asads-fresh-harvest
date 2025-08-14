"use client";
import { useGetProductByIdQuery } from "@/features/api/productApi";
import { useAppSelector } from "@hooks/reduxHooks";
import { AuthModal } from "@/components/AuthModal";

export default function Page({ params }: { params: { id: string } }) {
  const { data: product, isLoading } = useGetProductByIdQuery(params.id);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) return <AuthModal />;
  if (isLoading) return <p>Loading..</p>;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product?.name}</h1>
      <p>{product?.description}</p>
      <p className="text-lg font-semibold">${product?.price}</p>
    </div>
  );
}
