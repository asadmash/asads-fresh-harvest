import ProductPageClient from "./productPageClient";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  // Server passes the id directly to the client component
  return <ProductPageClient id={params.id} />;
}
