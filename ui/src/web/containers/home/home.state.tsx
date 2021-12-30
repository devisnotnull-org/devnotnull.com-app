import { ICommonFields } from '../../../models/common';
import { IBlogPostPayload } from '../../../models/blog';
import { IAbillityPayload } from '../../../models/abillity';
import { IExperiancePayload } from '../../../models/experiance';
import { IEducationPayload } from '../../../models/education';
import { IFolioPayload } from '../../../models/folio';
import { IMetadataPayload } from '../../../models/metadata';
import { IContactPayload } from '../../../models/contact';

export type IStateProps = {
  title?: string;
  blogItems: ICommonFields<IBlogPostPayload>[];
  abilityItems: ICommonFields<IAbillityPayload>[];
  experianceItems: ICommonFields<IExperiancePayload>[];
  educationItems: ICommonFields<IEducationPayload>[];
  contactItems: ICommonFields<IContactPayload>[];
  folioList: ICommonFields<IFolioPayload>[];
  metadata: IMetadataPayload;
};

export type IActionProps = {};

export type IHomeComponentProps = IStateProps & IActionProps;

