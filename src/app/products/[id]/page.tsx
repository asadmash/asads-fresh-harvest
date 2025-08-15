"use client";

import { useParams } from "next/navigation";
import { useGetProductByIdQuery } from "@/features/api/productApi";
import { useAppSelector } from "@/hooks/reduxHooks";
import AuthModal from "@/components/AuthModal";
import { section } from "motion/react-client";
import Image from "next/image";

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params?.id;

  // const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const { data: response, isLoading } = useGetProductByIdQuery(
    productId as string
  );

  // if (!isAuthenticated) return <AuthModal />;
  if (!productId) return <p>Invalid product</p>;
  if (isLoading) return <p>Loading product...</p>;
  if (!response || !response.data) return <p>Product not found.</p>;

  const product = response.data;

  return (
    <section className="@container">
      <div className="container_inner">
        <div className="fruites">
          <div>
            <Image
              src={
                product.images && product.images.length > 0
                  ? product.images[0]
                  : "/desktop-hero-bg.png"
              }
              width={400}
              height={400}
              alt="product-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
