import BlogDetails from "@/components/BlogDetails";
import React from "react";

const page = () => {
  return (
    <div className="px-4 py-4 md:py-10 container mx-auto w-full min-h-[calc(100vh-118px)] flex gap-4 md:gap-10 flex-col">
      <BlogDetails />
    </div>
  );
};

export default page;
