import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { Tag } from 'antd';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <article className="border border-[#333] rounded-lg p-6 hover:border-[#fbb040] hover:shadow-[0_0_12px_rgba(251,176,64,0.15)] transition-all bg-[#242424]">
            <Link href={`/posts/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 text-[#fbb040] hover:text-[#e09d30] transition-colors">
                    {post.title}
                </h2>
            </Link>

            <div className="flex flex-wrap items-center justify-between gap-y-2 mt-4">
                <span className="text-[#8b8b9a]" style={{ fontSize: '1.5rem' }}>
                    {formatDate(post.published_at)}
                </span>

                <div className="flex flex-wrap gap-2 text-xl">
                    {post.tags?.map(tag => (
                        <Tag key={tag} color="#8b1a1a" style={{ fontSize: '1.15rem' }}>{tag}</Tag>
                    ))}
                </div>
            </div>
        </article>
    );
}