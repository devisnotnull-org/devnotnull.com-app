import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms: any) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* helloSaga(): IterableIterator<any> {
  console.log('Hello Sagas!')
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        incrementAsync(),
        watchIncrementAsync(),
    ])
}