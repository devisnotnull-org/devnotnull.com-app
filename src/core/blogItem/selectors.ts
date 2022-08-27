import { createSelector } from 'reselect';
import { IBlogItemState } from './reducer';
import { IState } from '../reducers';

export const getBlogItem = (state: IState): IBlogItemState => state?.blogItem;

export const getBlogContent = createSelector(getBlogItem, state => state.fields.blogContent);

export const getBlogSlug = createSelector(getBlogItem, state => state?.fields.slug);

export const getBlogTitle = createSelector(getBlogItem, state => state?.fields.title);

export const getBlogAssets = createSelector(getBlogItem, state => state?.includes);
