"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LatestBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data.slice(-8).reverse());
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 pt-10">
      <div className="flex gap-4 justify-between items-center mb-4">
        <h1 className="text-xl text-accent uppercase">Latest Blog Posts</h1>
        <Link href="/blog">
              <button className="btn btn-sm btn-secondary">
                All Blog
              </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border border-base-300 flex flex-col h-full">
            <h2 className="text-lg text-white mb-2">{post.title}</h2>
            <p className="mb-4">{post.body.slice(0, 100)}...</p>
            <div className="mt-auto">
              <Link
                href={`/blog/${post.id}`}
                className="text-accent hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
