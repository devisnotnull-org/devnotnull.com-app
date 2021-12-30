import { IMetadataPayload } from '../../../models/metadata';

export type IStateProps = {
  metadata: IMetadataPayload;
};

export type IActionProps = {};

export type IHeaderProps = IStateProps & IActionProps;
