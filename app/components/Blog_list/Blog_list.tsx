import Link from "next/link";
import Image from "next/image";
import blogs from '@/public/JSON/blogs.json';



export default function BlogListPage() {
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
