import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
                <Image
                    src="/images/profile.jpg"
                    alt="Kevin Rosengren"
                    width={200}
                    height={200}
                    className="rounded-full mb-6"
                />

                <h1 className="text-3xl font-bold mb-4">About Me</h1>

                <p className="text-lg mb-4">
                    I'm Kevin, a software engineer passionate about DevOps, CI/CD, and infrastructure.
                </p>

                <p className="text-lg mb-6">
                    This blog documents my journey learning new technologies and building RosenPi,
                    my Raspberry Pi homelab for practicing DevOps skills.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Connect</h2>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/krosengr4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}