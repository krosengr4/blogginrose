'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, message } from 'antd';
import { login } from '@/lib/api';

export default function AdminLoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: { username: string; password: string }) => {
        setLoading(true);
        try {
            const { token } = await login(values);
            localStorage.setItem('admin_token', token);
            router.push('/admin/new-post');
        } catch (err) {
            message.error('Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '80px auto' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Admin Login</h1>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="username" label={<span style={{ color: 'white' }}>Username</span>} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label={<span style={{ color: 'white' }}>Password</span>} rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} block>
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}