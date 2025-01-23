import HomeBanner from "@/components/HomeBanner";
import LatestBlog from "@/components/LatestBlog";
import React from "react";

const page = () => {
  return (
    <main className="px-4 py-4 md:py-10 container mx-auto w-full min-h-[calc(100vh-118px)] flex gap-4 md:gap-10 flex-col">
      <HomeBanner/>
      <LatestBlog/>
    </main>
  );
};

export default page;
