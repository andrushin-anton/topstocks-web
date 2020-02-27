import SignalActionTypes from './signal.types';

const INITIAL_STATE = {
    companies: [],
    isFetching: false
}

const signalReducer  = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SignalActionTypes.FETCH_SIGNALS_START:
            return {
                ...state,
                isFetching: true,
                errorMessage: undefined
            }
        case SignalActionTypes.FETCH_SIGNALS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                companies: action.payload
            }
        case SignalActionTypes.FETCH_SIGNALS_FAILER:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default signalReducer;