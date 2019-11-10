import { fetchRequest } from '../../common/actions'

import { ICommonFields } from '../../models/common'
import { IBlogPostPayload } from '../../models/blog';
import { IAbillityPayload } from '../../models/abillity';
import { IExperiancePayload } from '../../models/experiance';
import { IEducationPayload } from '../../models/education';
import { IFolioPayload } from '../../models/folio';

import { getAbilityItems } from '../../common/ability/selectors';
import { getExperianceItems } from '../../common/experiance/selectors';
import { getEducationItems } from '../../common/education/selectors';
import { getBlogItems } from '../../common/blog/selectors';
import { getFolioItems } from '../../common/folio/selectors';
import { getMetadataItem } from '../../common/metadata/selectors';
import { IMetadataPayload } from '../../models/metadata';

import { IStateProps } from './home.state'

export type IStateProps = {
    title?: string,
    blogItems: ICommonFields<IBlogPostPayload>[];
    abilityItems: ICommonFields<IAbillityPayload>[];
    experianceItems: ICommonFields<IExperiancePayload>[];
    educationItems: ICommonFields<IEducationPayload>[];
    folioList: ICommonFields<IFolioPayload>[];
    metadata: ICommonFields<IMetadataPayload>[];
}

export type IActionProps = {
    onFetchAction(): void,
}

export type IHomeComponentProps = IStateProps & IActionProps;

export const mapStateToProps = (state: any): IStateProps => ({
    title: "This is a title",
    blogItems: getBlogItems(state),
    abilityItems: getAbilityItems(state),
    experianceItems:  getExperianceItems(state),
    educationItems: getEducationItems(state),
    folioList: getFolioItems(state),
    metadata: getMetadataItem(state)
});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    onFetchAction: () => dispatch(fetchRequest()),
});
