import { BlogState } from '../types/blog';

export const getBlogPosts = (state: BlogState) => state.data;
export const getBlogErrors = (state: BlogState) => state.errors;
export const getBlogLoading = (state: BlogState) => state.loading;
