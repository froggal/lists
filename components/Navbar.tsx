'use client'
import Link from "next/link";

const Navbar = () => {
  return (
      <div className="countainer">
        <nav>
          <Link href="/">KeyFrog's Lists</Link>
        </nav>
        <nav>
          <Link href="/bucket">버킷리스트</Link>
        </nav>
        <nav>
          <Link href="/wish">위시리스트</Link>
        </nav>
      </div>
  );
};

export default Navbar;