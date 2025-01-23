import Link from "next/link";
import SocialLinks from "./SocialLinks";


const Footer = () => {
  return (
    <>
      <footer className="border-t border-base-300 text-center py-4 ">
        <div className="container mx-auto px-4 flex flex-col gap-4 md:flex-row justify-between items-center">
          <div className="flex items-center">
            &copy; 2025.
            <span className="text-accent hover:underline">
              <Link href="/">Techbox</Link>
            </span> 
            . All rights reserved.
          </div>
          <div>
            <SocialLinks/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
