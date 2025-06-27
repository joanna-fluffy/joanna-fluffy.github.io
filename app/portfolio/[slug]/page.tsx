import PageClient from "./page-client";
import { getAllArtworks } from "@/data/artworks";

export async function generateStaticParams() {
  return getAllArtworks().map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export default function Wrapper({ params }: { params: { slug: string } }) {
  return <PageClient />;
}
