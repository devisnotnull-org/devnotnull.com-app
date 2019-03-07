import { IBlogPost } from "../model/blog";

export enum BlogActionTypes {
    FETCH_REQUEST = '@blog/FETCH_REQUEST',
    FETCH_SUCCESS = '@blog/FETCH_SUCCESS',
    FETCH_ERROR = '@blog/FETCH_ERROR',
    SELECTED = '@blog/SELECTED'
}

export interface BlogState {
    readonly loading: boolean
    readonly data: IBlogPost[]
    readonly errors?: string
}
