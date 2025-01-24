"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

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
    return (
      <div className="flex justify-center items-center h-96 flex-grow border border-base-300">
        Loading...
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

  return (
    <div>
      <div className="p-4 w-full min-h-[calc(100vh-150px)] md:min-h-[calc(100vh-198px)] border border-base-300 flex gap-4 flex-col justify-center items-center ">
        <h1 className="text-xl text-accent max-w-md md:text-justify mb-4">{post?.title}</h1>
        <p className="text-white max-w-md md:text-justify">{post?.body}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
