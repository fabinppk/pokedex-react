import { combineReducers } from 'redux';
import globalReducer from '_redux/reducers/globalReducer';

const rootReducer = combineReducers({
    global: globalReducer,
});

export default rootReducer;
