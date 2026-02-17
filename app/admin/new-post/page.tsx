'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, message } from 'antd';
import { createPost } from '@/lib/api';

export default function NewPostPage() {
    const router = useRouter();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [createdSlug, setCreatedSlug] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            router.push('/admin/login');
        }
    }, [router]);

    const onFinish = async (values: {
        title: string;
        content: string;
        tags: string;
        author: string;
    }) => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        const newPost = {
            title: values.title,
            content: values.content,
            tags: values.tags ? values.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
            author: values.author,
        };

        setLoading(true);
        try {
            const post = await createPost(newPost, token);
            setCreatedSlug(post.slug);
            message.success('Post created!');
            form.resetFields();
        } catch (err: any) {
            if (err?.response?.status === 401) {
                router.push('/admin/login');
            } else {
                message.error('Failed to create post');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 800, margin: '40px auto' }}>
            <h1>New Post</h1>

            {createdSlug && (
                <p>
                    Post created! <a href={`/posts/${createdSlug}`}>View post</a>
                </p>
            )}

            <Form form={form} layout="vertical" onFinish={onFinish}
                initialValues={{ author: 'Kevin Rosengren' }}>
                <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="content" label="Content" rules={[{ required: true }]}>
                    <Input.TextArea rows={16} />
                </Form.Item>
                <Form.Item name="tags" label="Tags (comma-separated)">
                    <Input placeholder="Go, DevOps, RosenPi" />
                </Form.Item>
                <Form.Item name="author" label="Author" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Publish
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}