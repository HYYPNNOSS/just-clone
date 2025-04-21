// @ts-ignore


import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

type Blog = {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
};

// Generate static paths for pre-rendering
export async function generateStaticParams() {
  const res = await fetch(`http://localhost:3000/JSON/blogs.json`);
  const blogs: Blog[] = await res.json();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Define the type for dynamic route parameters
interface PageProps {
  params: {
    slug: string;
  };
}

// The page component that renders individual blog post
export default async function BlogPostPage({ params }: PageProps) {
  const res = await fetch(`http://localhost:3000/JSON/blogs.json`);
  const blogs: Blog[] = await res.json();
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <section>
      <Navbar />
      <article className="max-w-3xl mx-auto p-8 min-h-[100dvh]">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={256}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <p className="text-lg">{blog.content}</p>
      </article>
      <Footer />
    </section>
  );
}

// Metadata generation for SEO and OG tags
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const res = await fetch(`http://localhost:3000/JSON/blogs.json`);
  const blogs: Blog[] = await res.json();
  const blog = blogs.find((b) => b.slug === params.slug);

  return {
    title: blog?.title || "Blog Post",
    description: blog?.content.slice(0, 160) || "Read our latest blog post.",
    openGraph: {
      images: blog?.image ? [{ url: blog.image }] : [],
    },
  };
}
