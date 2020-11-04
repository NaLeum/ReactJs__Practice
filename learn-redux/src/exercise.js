import {createStore} from 'redux';

// 초기 state값 정의
const initialState = {
    counter:0,
    text:'',
    list: []
};

// 액션 타입 정의 (대문자)
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액선생성함수 정의 (소문자)
const increase = () => ({
    type:INCREASE
})

const decrease = () => ({
    type: DECREASE
})

const changeText = text => ({
    type: CHANGE_TEXT,
    text
})

const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

// 리듀서 작성
function reducer(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                counter: state.counter +1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter -1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text:action.text
            }
        case ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state;
    }
}

// 스토어 생성
const store = createStore(reducer);

// 스토어 안의 상태를 조회
console.log(store.getState());

// 구독
// 리스너 함수 생성
const listener = () => {
    const state = store.getState();
    console.log(state);
}

// 구독
// const unsubscribe = store.subscribe(listener);
// 구독해지
// unsubscribe();

// 액션들을 dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세여'));
store.dispatch(addToList({ id:1, text:'와우'}));
