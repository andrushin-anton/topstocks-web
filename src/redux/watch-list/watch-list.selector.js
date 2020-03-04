import { createSelector } from 'reselect';

const selectWatchList = state => state.watchList;

export const selectAllWatchList = createSelector(
    [selectWatchList],
    (watchList) => watchList.companies
)

export const selectIsWatchListLoading = createSelector(
    [selectWatchList],
    watchList => watchList.isFetching
)