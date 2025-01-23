import Blog from "@/components/Blog";
import BlogBanner from "@/components/BlogBannar";
import React from "react";

const page = () => {
  return (
    <div className="px-4 py-4 md:py-10 container mx-auto w-full min-h-[calc(100vh-118px)] flex gap-4 md:gap-10 flex-col">
      <BlogBanner />
      <Blog />
    </div>
  );
};

export default page;
