import React from "react";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    icon: <FiFacebook />,
    alt: "Facebook"
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter />,
    alt: "X (Twitter)"
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
    alt: "Instagram"
  }
];

const SocialLinks = () => {
  return (
    <div>
      {/* social icons */}
      <div className="flex gap-6 items-center">
        {socialLinks.map(({ href, icon, alt }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors text-base"
            aria-label={alt}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
