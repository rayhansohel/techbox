"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 24;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        if (data.length === 0) {
          throw new Error("No posts found");
        }

        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;

        const postsForPage = data.slice(startIndex, endIndex);
        setPosts(postsForPage);
        setTotalPages(Math.ceil(data.length / postsPerPage));
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 flex-grow border border-base-300">
        Loading......
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96 flex-grow border border-base-300">
        {error}
      </div>
    );
  }

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const pageRange = [];
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(currentPage + 2, totalPages);

  if (endPage - startPage < 4) {
    if (currentPage < 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPage > totalPages - 3) {
      startPage = Math.max(totalPages - 4, 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageRange.push(i);
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border border-base-300 flex flex-col h-full">
            <h2 className="text-lg text-white mb-2">{post.title}</h2>
            <p className="mb-4">{post.body.slice(0, 50)}...</p>
            <div className="mt-auto">
              <Link href={`/blog/${post.id}`} className="text-accent hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-sm px-2 text-xl btn-accent mr-2"
        >
          <GrFormPrevious />
        </button>

        {/* Page numbers */}
        {pageRange.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`mx-2 hover:text-accent ${currentPage === page ? 'text-accent' : ''}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-sm px-2 text-xl btn-accent ml-2"
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Blog;
