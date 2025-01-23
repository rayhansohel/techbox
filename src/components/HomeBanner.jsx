import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const HomeBanner = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="border border-base-300 flex flex-col gap-2 justify-center md:items-center px-4 py-10">
      <div>
            <Link href="/">
              <Image
                src="/tech-box-logo-text.png"
                alt="Techbox Logo"
                width={250}
                height={50}
                priority
              />
            </Link>
          </div>
        <h1 className="text-2xl md:text-4xl text-accent">Welcome to Techbox</h1>
        <p>Your go-to place for the latest tech blogs and insights.</p>
      </div>
    </section>
  );
};

export default HomeBanner;
