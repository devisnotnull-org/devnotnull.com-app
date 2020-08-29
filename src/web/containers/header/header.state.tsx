import { fetchRequest } from '../../../core/actions'

import { IMetadataPayload } from '../../../models/metadata';
import { getMetadata } from '../../../core/metadata/selectors';

export type IStateProps = {
    metadata: IMetadataPayload;
}

export type IActionProps = {
    onFetchAction(): void,
}

export type IHeaderProps = IStateProps & IActionProps;

export const mapStateToProps = (state: any): IStateProps => ({
    metadata: getMetadata(state)
});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    onFetchAction: () => dispatch(fetchRequest()),
});
