import { combineReducers } from 'redux'

import blog, { IBlogState } from './blog/reducer'
import ability, { IAbilityState } from './ability/reducer'
import education, { IEducationState } from './education/reducer'
import experiance, { IExperianceState } from './experiance/reducer'
import folio, { IFolioState } from './folio/reducer'

export interface IState {
    blog: IBlogState
    ability: IAbilityState
    education: IEducationState
    experiance: IExperianceState
    folio: IFolioState
}

export default combineReducers<IState>({
    blog,
    ability,
    education,
    experiance,
    folio
})