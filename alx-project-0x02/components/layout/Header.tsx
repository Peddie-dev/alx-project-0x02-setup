// components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-6">
        <Link href="/home" className="hover:text-blue-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link href="/posts" className="hover:text-blue-400">
          Posts
        </Link>
      </nav>
    </header>
  );
}