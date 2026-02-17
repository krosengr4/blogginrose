import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-gray-200 mb-8">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Kevin Rosengren
                </Link>
                <ul className="flex gap-6">
                    <li><Link href="/" className="hover:text-blue-600">Blog</Link></li>
                    <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}