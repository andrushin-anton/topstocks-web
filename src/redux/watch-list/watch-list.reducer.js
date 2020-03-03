import WatchListActionTypes from './watch-list.types';

const INITIAL_STATE = {
    companies: [],
    isFetching: false
}

const watchListReducer  = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case WatchListActionTypes.FETCH_WATCH_LIST_START:
            return {
                ...state,
                isFetching: true,
                errorMessage: undefined
            }
        case WatchListActionTypes.FETCH_WATCH_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                companies: action.payload
            }
        case WatchListActionTypes.FETCH_WATCH_LIST_FAILER:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default watchListReducer;