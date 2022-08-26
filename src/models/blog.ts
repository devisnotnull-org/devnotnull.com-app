import { ICommonDataNode } from '../models/common';

export interface IBlogPostPayload {
  title: string;
  slug: string
  blogContent: ICommonDataNode;
}

