import { fetchRequest } from '../../../core/blog/actions';

import { ICommonFields } from '../../../models/common';
import { IBlogPostPayload } from '../../../models/blog';
import { getBlogItems } from '../../../core/blog/selectors';
import { IMetadataPayload } from '../../../models/metadata';
import { getMetadata } from '../../../core/metadata/selectors';

export type IStateProps = {
  title?: string;
  blogItems: ICommonFields<IBlogPostPayload>[];
  metadata: IMetadataPayload;
};

export type IActionProps = {
  onFetchAction(): void;
};

export type IBlogComponentProps = IStateProps & IActionProps;

export const mapStateToProps = (state: any): IStateProps => ({
  blogItems: getBlogItems(state),
  metadata: getMetadata(state)
});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
  onFetchAction: () => dispatch(fetchRequest())
});
