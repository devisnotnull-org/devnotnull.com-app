import { combineReducers } from 'redux';

import blog, { IBlogState } from './blog/reducer';
import ability, { IAbilityState } from './ability/reducer';
import education, { IEducationState } from './education/reducer';
import experiance, { IExperianceState } from './experiance/reducer';
import folio, { IFolioState } from './portfolio/reducer';
import metadata, { IMetadataState } from './metadata/reducer';
import assets, { IAssetState } from './assets/reducer';
import contact, { IContactState } from './contact/reducer';
import blogItem, { IBlogItemState } from './blogItem/reducer';
import config, { IConfigState } from './config/reducer';
import { createRouterReducer } from '@lagunovsky/redux-react-router'

export interface IState {
  blog: IBlogState;
  ability: IAbilityState;
  education: IEducationState;
  experiance: IExperianceState;
  folio: IFolioState;
  metadata: IMetadataState;
  assets: IAssetState;
  contact: IContactState;
  config: IConfigState;
  blogItem: IBlogItemState;
  router: any;
}

const rootReducers = (history: any) =>
  combineReducers<IState>({
    blog,
    ability,
    education,
    experiance,
    folio,
    metadata,
    assets,
    contact,
    config,
    blogItem,
    router: createRouterReducer(history),
  });

export default rootReducers;
