//Components/Header.tsx
import Link from "next/link";


export default function Header () {
    return (
        <header className="bg-gray-800 p-4">
        <nav className="flex gap-6">
        <Link href="/home" className="text-white hover:text-blue-400">
          Home Page
        </Link>
        <Link href="/about" className="text-white hover:text-blue-400">
          About
        </Link>
      </nav>
        </header>


    );
}