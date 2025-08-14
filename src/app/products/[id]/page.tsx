import ProductPageClient from "./productPageClient";
// update params
export default async function Page({ params }: { params: any }) {
  return <ProductPageClient id={params.id} />;
}
