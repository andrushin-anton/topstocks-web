import { takeLatest, call, put, all } from 'redux-saga/effects';
import SignalActionTypes from './signal.types';
import { firestore, convertSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchSignalsFailer, fetchSignalsSuccess } from './signal.actions';


export function* fetchSignalsAsync() {
    try {
        const signalsRef = firestore.collection('signals');
        const snapshot = yield signalsRef.get();
        const signalsMap = yield call(convertSnapshotToMap, snapshot);
        yield put(fetchSignalsSuccess(signalsMap));
    } catch(error) {
        yield put(fetchSignalsFailer(error.message));
    }
}

export function* fetchSignalsStart() {
    yield takeLatest(
        SignalActionTypes.FETCH_SIGNALS_START, 
        fetchSignalsAsync
    );
}

export function* signalSagas() {
    yield(all([
        call(fetchSignalsStart)
    ]))
}