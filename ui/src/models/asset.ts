export interface IAssetDataPayload {
  title: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
  };
  fileName: string;
  contentType: string;
}

export interface IAssetSysPayload {
  id: string;
  type: string;
}

export interface IAssetPayload {
  sys: IAssetSysPayload;
  fields: IAssetDataPayload;
}
