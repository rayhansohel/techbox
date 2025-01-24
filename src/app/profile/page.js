import React from "react";

const page = () => {
  return (
    <div className="px-4 py-4 md:py-10 container mx-auto">
      <div className="p-4 w-full min-h-[calc(100vh-150px)] md:min-h-[calc(100vh-198px)] flex gap-4 flex-col justify-center items-center border border-base-300">
        <h1 className="text-2xl md:text-4xl text-accent">Profile</h1>
        <p>Wellcone to Profile Page</p>
      </div>
    </div>
  );
};

export default page;
