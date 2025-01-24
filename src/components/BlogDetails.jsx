"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query || {};

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!res.ok) {
          throw new Error("Post not found");
        }

        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-80">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-80 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-accent mb-4">{post?.title}</h1>
      <p className="text-lg text-white">{post?.body}</p>
      <button onClick={() => router.back()} className="mt-4 btn btn-secondary">Go Back</button>
    </div>
  );
};

export default BlogDetails;