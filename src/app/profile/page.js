import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return (
      <div className="px-4 py-4 md:py-10 container mx-auto">
        <p className="p-4 w-full min-h-[calc(100vh-150px)] md:min-h-[calc(100vh-198px)] flex gap-4 flex-col justify-center items-center border border-base-300">
          You must be logged in to access data
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 py-4 md:py-10 container mx-auto">
      <div className="p-4 w-full min-h-[calc(100vh-150px)] md:min-h-[calc(100vh-198px)] flex gap-4 flex-col justify-center items-center border border-base-300">
        <h1 className="text-2xl md:text-4xl text-accent">Profile</h1>
        <p>
          Hello,{" "}
          <span className="text-accent font-semibold">
            {" "}
            {user.given_name || user.email}
          </span>{" "}
          ! Welcome to Techbox.
        </p>
      </div>
    </div>
  );
};

export default Profile;
