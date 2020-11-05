import {combineReducers} from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import { postsSaga } from './posts';

const rootReducer = combineReducers({counter});

export function* rootSaga(){
    yield all([counterSaga(),postsSaga]);
}

export default rootReducer;
