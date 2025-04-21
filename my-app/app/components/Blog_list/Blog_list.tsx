import Link from "next/link";
import Image from "next/image";

type Blog = {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt: string; 
};

export default async function BlogListPage() {
  const res = await fetch(`http://localhost:3000/JSON/blogs.json`);
  const blogs: Blog[] = await res.json();

  console.log(blogs);
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-ruby">Our Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`}>
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-white">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={192}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">{blog.title}</h2>
                <p className="text-gray-700 text-base mb-4">{blog.excerpt}</p>
                <button className="text-ruby font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
