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
                    I'm Kevin, a software engineer with a passion for backend development, system
                    architecture, and infrastructure. I love digging into how systems are designed and
                    built under the hood — from crafting well-structured APIs and services to thinking
                    through how everything fits together at scale.
                </p>

                <p className="text-xl mb-4">
                    One of my favorite parts of this field is that there's always something new to learn.
                    Whether it's picking up a new tool, working through a hard problem, or exploring a
                    concept I've been curious about. I'd rather get my hands dirty and figure it out
                    than read about it from the sidelines.
                </p>

                <p className="text-xl mb-6">
                    This blog is where I write about that journey — the things I've been building,
                    the topics I've been diving into, and whatever has been on my mind lately in the
                    world of software. If any of it resonates with you, I hope it's useful.
                </p>

                <div className="mt-8 border-t border-gray-600 pt-6 w-full">
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
                </div>

            </div>
        </div>
    );
}