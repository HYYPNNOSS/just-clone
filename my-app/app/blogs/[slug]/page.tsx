import Image from "next/image";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import blogs from '@/public/JSON/blogs.json';
import { notFound } from "next/navigation";

// interface BlogPost {
//   id: number;
//   title: string;
//   slug: string;
//   content: string;
//   image: string;
// }

// Generate static paths for pre-rendering
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// The page component that renders individual blog post
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

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
