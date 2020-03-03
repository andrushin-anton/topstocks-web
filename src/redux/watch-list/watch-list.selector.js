import { createSelector } from 'reselect';

const selectWatchList = state => state.watchList;

export const selectAllWatchList = createSelector(
    [selectWatchList],
    (watchList) => watchList.companies
)

export const selectIsWatchListLoaded = createSelector(
    [selectWatchList],
    watchList => !!watchList.companies
)