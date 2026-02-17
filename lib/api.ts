import axios from "axios";
import { BlogPost, LoginRequest, LoginResponse } from "./types";

// Create axios instance
export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// API functions for BlogginRose 

export async function fetchPosts(): Promise<BlogPost[]> {
    const response = await apiClient.get<BlogPost[]>('/posts');
    return response.data;
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost> {
    const response = await apiClient.get<BlogPost>(`/posts/${slug}`);
    return response.data;
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
    const response = await apiClient.get<BlogPost[]>(`/posts/search?q=${query}`);
    return response.data;
}

export async function fetchTags(): Promise<string[]> {
    const response = await apiClient.get<string[]>('/tags');
    return response.data;
}

export async function login(req: LoginRequest): Promise<LoginResponse> {
    const response = apiClient.post<LoginResponse>('/login', req);
    return (await response).data;
}

export async function createPost(post: Pick<BlogPost, 'title' | 'content' | 'tags' | 'author'>, token: string): Promise<BlogPost> {
    const response = await apiClient.post<BlogPost>('/admin/posts', post, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}