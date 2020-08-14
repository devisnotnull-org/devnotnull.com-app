import { fetchRequest } from '../../../core/portfolio/actions'
import { ICommonFields } from '../../../models/common'
import { IFolioPayload } from '../../../models/folio'
import { getFolioItems, getFolioAssets,  } from '../../../core/portfolio/selectors';
import { IAssetPayload } from 'models/asset';

export type IStateProps = {
    title?: string
    folio: ICommonFields<IFolioPayload>[]
    assets: IAssetPayload[]
}

export type IActionProps = {
    onFetchAction(): void,
}

export type IFolioComponentProps = IStateProps & IActionProps;

export const mapStateToProps = (state: any): IStateProps => ({
    folio: getFolioItems(state),
    assets: getFolioAssets(state)
});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    onFetchAction: () => dispatch(fetchRequest()),
});
