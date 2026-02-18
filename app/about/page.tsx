import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
                <Image
                    src="/images/profile.png"
                    alt="Kevin Rosengren"
                    width={150}
                    height={150}
                    className="rounded-full mb-6"
                />

                <h1 className="font-bold mb-4 underline text-[#8b1a1a]" style={{ fontSize: '2.25rem' }}>About Me</h1>

                <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                    I'm Kevin, a software engineer with a passion for backend development, system
                    architecture, and infrastructure. I love digging into how systems are designed and
                    built under the hood — from crafting well-structured APIs and services to thinking
                    through how everything fits together at scale.
                </p>

                <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                    One of my favorite parts of this field is that there's always something new to learn.
                    Whether it's picking up a new tool, working through a hard problem, or exploring a
                    concept I've been curious about. I'd rather get my hands dirty and figure it out
                    than read about it from the sidelines.
                </p>

                <p className="mb-6" style={{ fontSize: '1.1rem' }}>
                    This blog is where I write about that journey — the things I've been building,
                    the topics I've been diving into, and whatever has been on my mind lately in the
                    world of software. If any of it resonates with you, I hope it's useful.
                </p>

                <div className="mt-8 border-t border-gray-600 pt-6 w-full">
                    <h2 className="font-semibold mb-3 underline text-[#8b1a1a]" style={{ fontSize: '2.25rem' }}>Connect</h2>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/krosengr4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#fbb040] hover:underline"
                            style={{ fontSize: '1rem' }}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#fbb040] hover:underline"
                            style={{ fontSize: '1rem' }}
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}