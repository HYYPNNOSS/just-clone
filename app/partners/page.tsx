'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/hero_partners/hero';
import partners from '@/public/JSON/partners.json';

type Partner = {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  category: string;
};

export default function PartnersPage() {
  const [filtered, setFiltered] = useState<Partner[]>(partners);
  const [categories] = useState<string[]>(['All', ...new Set(partners.map((p) => p.category))]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFiltered(partners);
    } else {
      setFiltered(partners.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      <Hero/>
      <div className="p-8 min-h-[100dvh]">
        <h1 className="text-3xl font-bold mb-6">Our Partners</h1>

        <div className="mb-6">
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((partner) => (
            <Link
              key={partner.id}
              href={`/partners/${partner.slug}`}
              className="block border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                className="h-20 object-contain mb-4"
              />
              <h2 className="text-xl font-semibold">{partner.name}</h2>
              <p className="text-sm text-gray-600">{partner.category}</p>
              <p className="mt-2 text-sm">{partner.description.slice(0, 80)}...</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
