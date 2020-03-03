import WatchListActionTypes from './watch-list.types';

export const fetchWatchListsStart = () => ({
    type: WatchListActionTypes.FETCH_WATCH_LIST_START
});

export const fetchWatchListsSuccess = (companies) => ({
    type: WatchListActionTypes.FETCH_WATCH_LIST_SUCCESS,
    payload: companies
});

export const fetchWatchListsFailer = (errorMessage) => ({
    type: WatchListActionTypes.FETCH_WATCH_LIST_FAILER,
    payload: errorMessage
});