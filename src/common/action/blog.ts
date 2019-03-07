import { action } from 'typesafe-actions'

import { IBlogPost } from '../model/blog';
import { BlogActionTypes } from '../types/blog';

export const fetchRequest = () => action(BlogActionTypes.FETCH_REQUEST)
export const fetchSuccess = (data: IBlogPost[]) => action(BlogActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(BlogActionTypes.FETCH_ERROR, message)
export const fetchSingularRequest = (id: string) => action(BlogActionTypes.FETCH_REQUEST)
