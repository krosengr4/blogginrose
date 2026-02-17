import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
                <Image
                    src="/images/profile.png"
                    alt="Kevin Rosengren"
                    width={200}
                    height={200}
                    className="rounded-full mb-6"
                />

                <h1 className="text-5xl font-bold mb-4 underline text-[#8b1a1a]">About Me</h1>

                <p className="text-xl mb-4">
                    I'm Kevin, a software engineer passionate about DevOps, CI/CD, and infrastructure.
                </p>

                <p className="text-xl mb-6">
                    This blog documents my journey learning new technologies and building RosenPi,
                    my Raspberry Pi homelab for practicing DevOps skills.
                </p>

            </div>

            <footer className="mt-16 border-t border-gray-600 pt-6 text-center">
                <h2 className="text-3xl font-semibold mb-3 underline text-[#8b1a1a]">Connect</h2>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://github.com/krosengr4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-[#fbb040] hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-[#fbb040] hover:underline"
                    >
                        LinkedIn
                    </a>
                </div>
            </footer>
        </div>
    );
}