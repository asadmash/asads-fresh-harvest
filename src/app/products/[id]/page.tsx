import ProductPageClient from "./productPageClient";
// update params
export default function Page({ params }: { params: { id: string } }) {
  return <ProductPageClient id={params.id} />;
}
