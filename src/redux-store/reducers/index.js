import { combineReducers } from 'redux';

const INITIAL = {
    catalog: [],
    loading: false,
    failed: false,
};

const businessesDataReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case 'LOAD_START':
            return { ...state, loading: false };
        case 'LOAD':
            return { ...state, catalog: action.payload, loading: false };
        case 'LOAD_FAILED':
            return { ...state, loading: false, failed: true };
        default:
            return state;
    }
};

const allReducers = combineReducers({
    businesses: businessesDataReducer,
});

export default allReducers;
