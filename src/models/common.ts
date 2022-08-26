export interface ICommonFields<T> {
  fields: T;
}

export interface ICommonContentListPayload<T> {
  total: number;
  skip: number;
  limit: number;
  items: Array<ICommonFields<T>>;
}

export interface ICommonContentayload<T> {
  item: ICommonFields<T>;
}

export interface ICommonDataNode {
  nodeType: string;
  data: any;
  content: [ICommonDataNode];
  value: string;
  marks: { type: string }[];
}

export interface ILink {
  sys: {
    type: string;
    linkType: string;
    id: string;
  };
}

export interface IAsset {
  sys: {
    id: string
    linkType: string
    type: string
  }
}


