import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="border-b border-base-300 sticky top-0 z-50 bg-base-100">
      <div className="flex justify-between items-center p-4 container mx-auto">
        <DropdownMenu navLinks={navLinks} />
        <div>
          <Link href="/">
            <Image
              src="/tech-box-logo-text.png"
              alt="Techbox Logo"
              width={150}
              height={30}
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link href="/profile" className="hover:text-accent">
                Profile
              </Link>
              <LogoutLink postLogoutRedirectURL="/">
                <button className="btn btn-sm btn-accent">logout</button>
              </LogoutLink>
            </>
          ) : (
            <LoginLink>
              <button className="btn btn-sm btn-accent">login</button>
            </LoginLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
