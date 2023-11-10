import {
  BaseContentfulRecord,
  IAssetReference,
  ICommonDataNode,
} from "../models/common";

export type BlogFields = {
  title: string;
  slug: string;
  summary: string;
  image: IAssetReference[];
  blogContent?: ICommonDataNode;
};

export type Blog = BaseContentfulRecord<BlogFields>;
