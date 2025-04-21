// app/partners/[slug]/page.tsx
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";

type Partner = {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  category: string;
};

export async function generateStaticParams() {
  const res = await fetch(`http:localhost:3000/JSON/partners.json`);
  const partners: Partner[] = await res.json();

  return partners.map((partner) => ({
    slug: partner.slug,
  }));
}

export default async function PartnerPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`http:localhost:3000/JSON/partners.json`);
  const partners: Partner[] = await res.json();

  const partner = partners.find((p) => p.slug === params.slug);

  if (!partner) return notFound();

  return (
    <>
    <Navbar></Navbar>
    <div className="max-w-3xl mx-auto p-8 min-h-[100dvh] flex flex-col md:flex-row items-center md:items-start">
      <Image src={partner.logo} alt={partner.name} width={128} height={128} className="h-32 w-32 mb-6 md:mb-0 md:mr-8 object-contain" />
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold mb-2">{partner.name}</h1>
        <p className="text-sm text-gray-500">{partner.category}</p>
        <p className="mt-4 text-lg">{partner.description}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Our Impact</h2>
          <ul className="list-disc list-inside">
            <li>Increased client revenue by 20% through strategic financial planning.</li>
            <li>Reduced operational costs by 15% with efficient accounting solutions.</li>
            <li>Enhanced financial reporting accuracy by 30%.</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const res = await fetch(`http://localhost:3000/JSON/partners.json`);
    const partners: Partner[] = await res.json();
    const partner = partners.find((p) => p.slug === params.slug);
    return {
      title: partner?.name || "Partner",
      description: partner?.description.slice(0, 160),
      openGraph: {
        images: [{ url: partner?.logo }],
      },
    };
  }