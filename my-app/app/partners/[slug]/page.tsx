import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import partners from '@/public/JSON/partners.json';

// type Partner = {
//   id: number;
//   name: string;
//   slug: string;
//   logo: string;
//   description: string;
//   category: string;
// };

// ✅ Static params for SSG
export async function generateStaticParams() {
  return partners.map((partner) => ({
    slug: partner.slug,
  }));
}

// ✅ Dynamic route
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PartnerPage({ params }: Props) {
  const resolvedParams = await params;
  const partner = partners.find((p) => p.slug === resolvedParams.slug);

  if (!partner) return notFound();

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-8 min-h-[100dvh] flex flex-col md:flex-row items-center md:items-start">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={128}
          height={128}
          className="h-32 w-32 mb-6 md:mb-0 md:mr-8 object-contain"
        />
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
      <Footer />
    </>
  );
}
