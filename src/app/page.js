import HomeBanner from "@/components/HomeBanner";
import LatestBlog from "@/components/LatestBlog";
import React from "react";

const page = () => {
  return (
    <main className="py-4 md:py-10">
      <HomeBanner/>
      <LatestBlog/>
    </main>
  );
};

export default page;
