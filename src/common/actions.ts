import { action } from 'typesafe-actions';

import { AbilitiesActionTypes } from './ability/actions'
import { BlogActionTypes } from './blog/actions'
import { EducationActionTypes } from './education/actions'
import { ExperianceActionTypes } from './experiance/actions'
import { FolioActionTypes } from './folio/actions'

export {
  AbilitiesActionTypes,
  BlogActionTypes,
  EducationActionTypes,
  ExperianceActionTypes,
  FolioActionTypes
}

export enum GlobalActionTypes {
  FETCH_START = '@global/FETCH_START',
  FETCH_SUCCESS = '@global/FETCH_SUCCESS',
  FETCH_ERROR = '@global/FETCH_ERROR',
}

export const fetchRequest = () => action(GlobalActionTypes.FETCH_START);
export const fetchSuccess = () => action(GlobalActionTypes.FETCH_SUCCESS);
export const fetchError = (message: string) => action(GlobalActionTypes.FETCH_ERROR, message);
