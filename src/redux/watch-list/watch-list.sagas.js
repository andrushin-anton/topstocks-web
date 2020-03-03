import { takeLatest, call, put, all } from 'redux-saga/effects';
import WatchListActionTypes from './watch-list.types';
import { firestore, convertSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchWatchListsSuccess, fetchWatchListsFailer } from './watch-list.actions';


export function* fetchWatchListAsync() {
    try {
        const signalsRef = firestore.collection('watch-list');
        const snapshot = yield signalsRef.get();
        const signalsMap = yield call(convertSnapshotToMap, snapshot);
        yield put(fetchWatchListsSuccess(signalsMap));
    } catch(error) {
        yield put(fetchWatchListsFailer(error.message));
    }
}

export function* fetchWatchListStart() {
    yield takeLatest(
        WatchListActionTypes.FETCH_WATCH_LIST_START, 
        fetchWatchListAsync
    );
}

export function* watchListSagas() {
    yield(all([
        call(fetchWatchListStart)
    ]))
}