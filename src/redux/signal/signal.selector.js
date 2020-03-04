import { createSelector } from 'reselect';

const selectSignals = state => state.signals;

export const selectAllSignals = createSelector(
    [selectSignals],
    (signals) => signals.companies
)

export const selectIsSignalsLoaded = createSelector(
    [selectSignals],
    signals => signals.isFetching
)