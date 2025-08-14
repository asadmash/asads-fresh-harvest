"use client";
import { useGetProductByIdQuery } from "@/features/api/productApi";
import { useAppSelector } from "@/hooks/reduxHooks";
import AuthModal from "@/components/AuthModal";

// define a PageProps type
type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  const { data: product, isLoading } = useGetProductByIdQuery(params.id);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) return <AuthModal />;
  if (isLoading) return <p>Loading..</p>;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product?.productName}</h1>
      <p>{product?.description}</p>
      <p className="text-lg font-semibold">${product?.price}</p>
    </div>
  );
}
