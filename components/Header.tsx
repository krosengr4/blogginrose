import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="border-b border-[#333] mb-8 bg-[#1a1a1a]">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/ferda-logo.png"
                        alt="F-Dog logo"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                    <span className="text-2xl font-bold font-mono text-[#fbb040]">~/kevinrosengren</span>
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