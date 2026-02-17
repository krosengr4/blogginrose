import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-[#333] mb-8 bg-[#1a1a1a]">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold font-mono text-[#fbb040]">
                    ~/kevinrosengren
                </Link>
                <ul className="flex gap-6">
                    <li><Link href="/" className="hover:text-[#fbb040] transition-colors">Blog</Link></li>
                    <li><Link href="/about" className="hover:text-[#fbb040] transition-colors">About</Link></li>
                    <li><Link href="/admin/login" className="hover:text-[#fbb040] transition-colors">Admin</Link></li>
                </ul>
            </nav>
        </header>
    );
}