import { ICommonFields } from '../../../models/common';
import { IBlogPostPayload } from '../../../models/blog';
import { IMetadataPayload } from '../../../models/metadata';

export type IStateProps = {
  title?: string;
  blogItems: ICommonFields<IBlogPostPayload>[];
  metadata: IMetadataPayload;
  pagination: { total: number, skip: number, limit: number }
};

export type IActionProps = {
  onFetchAction(): void;
};

export type IBlogComponentProps = IStateProps & IActionProps;
