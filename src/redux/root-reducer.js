import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from  'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import signalReducer from './signal/signal.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    signals: signalReducer
});

export default persistReducer(persistConfig, rootReducer);