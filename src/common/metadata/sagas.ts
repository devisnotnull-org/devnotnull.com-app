import { path } from 'ramda';
import { call, put } from 'redux-saga/effects';

import { MetadataActionTypes } from './actions'

import { AssetActionTypes } from '../assets/actions';

import { fetchMetadata } from './fetch';

const metadataId = '721DX3ujLmVAwmiguGLP8t';

export function* metadataSagas() {
  try {
    const payload = yield call(fetchMetadata, metadataId);

    console.log(payload)
    console.log('PrimaryImage, ', path(['data', 'fields', 'primaryImage', 'sys', 'id'], payload))
    console.log('SecondaryImage, ', path(['data', 'fields', 'secondaryMedia', 'sys', 'id'], payload))
    
    yield put({
      type: AssetActionTypes.FETCH_START,
      payload: path<any>(['data', 'fields', 'primaryImage', 'sys', 'id'], payload)
    });
    
    yield put({
      type: MetadataActionTypes.FETCH_SUCCESS,
      payload: payload.data.fields
    });
  } catch(ex) {
    yield put({
      type: MetadataActionTypes.FETCH_ERROR,
      ex
    });
  }
}