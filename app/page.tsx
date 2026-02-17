'use client';

import { useState, useEffect } from 'react';
import { Input, Row, Col, Spin } from 'antd';
import BlogCard from '@/components/BlogCard';
import { fetchPosts, searchPosts } from '@/lib/api';
import { BlogPost } from '@/lib/types';


export default function HomePage() {
  const [posts, setPosts] = useState<BlogPost[]>(([]));
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      console.error("Failed to load posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (value: string) => {
    setSearchQuery(value);
    if (value.trim() === '') {
      loadPosts();
    } else {
      try {
        const results = await searchPosts(value);
        setPosts(results);
      } catch (err) {
        console.error('Search failed:', err)
      }
    }
  };

  if (loading) {
    return <div className="flex justify-center py-12"><Spin size="large" /></div>;
  }

  return (
    <div>
      <div className="mb-8">
        <Input.Search
          placeholder="Search posts..."
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
          size="large"
          allowClear
        />
      </div>

      <Row gutter={[24, 24]}>
        {posts.map((post) => (
          <Col xs={24} md={12} lg={8} key={post.post_id}>
            <BlogCard post={post} />
          </Col>
        ))}
      </Row>
    </div>
  );
}