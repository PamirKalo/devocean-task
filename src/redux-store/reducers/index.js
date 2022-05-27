import { combineReducers } from 'redux';

const INITIAL = {
    catalog: [],
    loading: false,
};

const businessesDataReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case 'LOAD_START':
            return { ...state, loading: action.payload };
        case 'LOAD':
            return { ...state, catalog: action.payload, loading: false };
        default:
            return state;
    }
};

const allReducers = combineReducers({
    businesses: businessesDataReducer,
});

export default allReducers;
