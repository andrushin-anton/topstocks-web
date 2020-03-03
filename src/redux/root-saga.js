import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { signalSagas } from './signal/signal.sagas';
import { watchListSagas } from './watch-list/watch-list.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(signalSagas),
        call(watchListSagas)
    ]);
}