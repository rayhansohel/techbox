import { cn } from '@/lib/utils';
import { Link } from 'next/link';
import { cn as beClassnames } from 'bem-classnames';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold">
          My App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className={beClassnames('link', { active: pathname === '/' })}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={beClassnames('link', { active: pathname === '/about' })}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;