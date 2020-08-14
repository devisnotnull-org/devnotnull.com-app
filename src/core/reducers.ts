import { combineReducers } from 'redux'

import blog, { IBlogState } from './blog/reducer'
import ability, { IAbilityState } from './ability/reducer'
import education, { IEducationState } from './education/reducer'
import experiance, { IExperianceState } from './experiance/reducer'
import folio, { IFolioState } from './portfolio/reducer'
import metadata, { IMetadataState } from './metadata/reducer'
import assets, { IAssetState } from './assets/reducer'
import contact, { IContactState } from './contact/reducer'
import { connectRouter } from 'connected-react-router'

export interface IState {
    blog: IBlogState
    ability: IAbilityState
    education: IEducationState
    experiance: IExperianceState
    folio: IFolioState
    metadata: IMetadataState
    assets: IAssetState
    contact: IContactState
    router: any
}

const rootReducers = (history: any) => combineReducers<IState>({
    blog,
    ability,
    education,
    experiance,
    folio,
    metadata,
    assets,
    contact,
    router: connectRouter(history)
});

export default rootReducers;