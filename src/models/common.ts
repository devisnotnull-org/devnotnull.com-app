export interface ICommonDataNode {
  nodeType: string;
  data: any;
  content: ICommonDataNode[];
  value: string;
  marks: { type: string }[];
}

export interface IAsset {
  metadata: {
    tags: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    revision: number;
    locale: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface IAssetReference {
  sys: {
    id: string;
    linkType: string;
    type: string;
  };
}

export type BaseContentfulRecord<T> = {
  metadata: {
    tags: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    }[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: string;
  };
  fields: T;
};

export interface CommonContentPayload<T> {
  payload: BaseContentfulRecord<T> & {
    includes: {
      Asset: IAsset[];
    };
  };
}

export interface CommonContentListPayload<T> {
  payload: {
    total: number;
    skip: number;
    limit: number;
    items: Array<BaseContentfulRecord<T>>;
    includes: {
      Asset: IAsset[];
    };
  };
}
