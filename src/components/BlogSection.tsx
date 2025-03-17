// src/components/BlogSection.tsx
import { useEffect, useState } from "react";
import axios from "axios";

interface Blog {
  title: string;
  excerpt: string;
  link: string;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get("https://example.com/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="mt-2">{blog.excerpt}</p>
            <a href={blog.link} className="text-primary mt-4 block">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
