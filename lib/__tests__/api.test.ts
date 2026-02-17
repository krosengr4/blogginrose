import MockAdapter from 'axios-mock-adapter';
import * as api from '../api';

const mock = new MockAdapter(api.apiClient);

afterEach(() => mock.reset());

describe('fetchPosts', () => {
    it('returns a list of posts', async () => {
        const posts = [{ id: 1, title: 'Hello', slug: 'hello' }];
        mock.onGet('/posts').reply(200, posts);

        const result = await api.fetchPosts();
        expect(result).toEqual(posts);
    });
});

describe('login', () => {
    it('returns a token on success', async () => {
        const resp = { token: 'abc123' };
        mock.onPost('/login').reply(200, resp);

        const result = await api.login({ username: 'admin', password: 'pass' });
        expect(result.token).toBe('abc123');
    });
});