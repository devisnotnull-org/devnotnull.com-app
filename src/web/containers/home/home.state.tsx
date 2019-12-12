import { fetchRequest } from '../../../core/actions'

import { ICommonFields } from '../../../models/common'
import { IBlogPostPayload } from '../../../models/blog';
import { IAbillityPayload } from '../../../models/abillity';
import { IExperiancePayload } from '../../../models/experiance';
import { IEducationPayload } from '../../../models/education';
import { IFolioPayload } from '../../../models/folio';

import { getAbilityItems } from '../../../core/ability/selectors';
import { getExperianceItems } from '../../../core/experiance/selectors';
import { getEducationItems } from '../../../core/education/selectors';
import { getBlogItems } from '../../../core/blog/selectors';
import { getFolioItems } from '../../../core/folio/selectors';
import { getMetadata } from '../../../core/metadata/selectors';
import { IMetadataPayload } from '../../../models/metadata';

import { IStateProps } from './home.state'
import { IContactPayload } from '../../../models/contact';
import { getContactItems } from '../../../core/contact/selectors';

export type IStateProps = {
    title?: string,
    blogItems: ICommonFields<IBlogPostPayload>[];
    abilityItems: ICommonFields<IAbillityPayload>[];
    experianceItems: ICommonFields<IExperiancePayload>[];
    educationItems: ICommonFields<IEducationPayload>[];
    contactItems: ICommonFields<IContactPayload>[];
    folioList: ICommonFields<IFolioPayload>[];
    metadata: IMetadataPayload;
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
    metadata: getMetadata(state),
    contactItems: getContactItems(state)
});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    onFetchAction: () => dispatch(fetchRequest()),
});
