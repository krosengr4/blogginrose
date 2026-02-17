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
        <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Link href={`/posts/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                    {post.title}
                </h2>
            </Link>

            <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                    {formatDate(post.published_at)}
                </span>

                <div className="flex gap-2">
                    {post.tags?.map(tag => (
                        <Tag key={tag} color="blue">{tag}</Tag>
                    ))}
                </div>
            </div>
        </article>
    );
}