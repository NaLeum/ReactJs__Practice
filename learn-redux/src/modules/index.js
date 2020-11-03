// 루트리듀서
// 우리가 만든 리듀서 모듈들을 합쳐줘야한다. 
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;