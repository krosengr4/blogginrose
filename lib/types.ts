export interface BlogPost {
    post_id: number,
    title: string,
    content: string,
    slug: string,
    tags: string[],
    author: string[],
    published_at: string,
}

export interface LoginRequest {
    username: string,
    password: string,
}

export interface LoginResponse {
    token: string
}