import SignalActionTypes from './signal.types';

export const fetchSignalsStart = () => ({
    type: SignalActionTypes.FETCH_SIGNALS_START
});

export const fetchSignalsSuccess = (companies) => ({
    type: SignalActionTypes.FETCH_SIGNALS_SUCCESS,
    payload: companies
});

export const fetchSignalsFailer = (errorMessage) => ({
    type: SignalActionTypes.FETCH_SIGNALS_FAILER,
    payload: errorMessage
});