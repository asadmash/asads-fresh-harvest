import ProductPageClient from "./productPageClient";

export default function Page({ params }: { params: { id: string } }) {
  return <ProductPageClient id={params.id} />;
}
