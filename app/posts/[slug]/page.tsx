import { fetchPostBySlug } from '@/lib/api';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Tag } from 'antd';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post;

    try {
        post = await fetchPostBySlug(slug);
    } catch (error) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8 text-[#8b8b9a]">
                <span>
                    {new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </span>
                <div className="flex gap-2">
                    {post.tags.map((tag) => (
                        <Tag key={tag} color="gold">{tag}</Tag>
                    ))}
                </div>
            </div>

            <MarkdownRenderer content={post.content} />
        </article>
    );
}