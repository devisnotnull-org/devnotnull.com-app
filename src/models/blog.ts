import { ICommonDataNode } from '../models/common';

export interface IBlogPostPayload {
  fields: {
    title: string;
    slug: string
    blogContent?: ICommonDataNode;
  }
}

