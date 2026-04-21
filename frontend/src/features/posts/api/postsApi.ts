import api from "../../../services/api";
import type { Post } from "../../../types/post";

export const fetchPosts = () => api.get<Post[]>('/social_posts');
export const fetchPostById = (id: string) => api.get<Post>(`/social_posts/${id}`);