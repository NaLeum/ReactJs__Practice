
// 액션 정의
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션생성함수
export const setDiff = diff => ({ type: SET_DIFF,diff });
export const increase = () => ({ type:INCREASE });
export const decrease = () => ({ type: DECREASE });

// 리듀서에서 사용할 초기값
const initialState = {
    number: 0,
    diff: 1
};

// 리듀서 작성
export default function counter(state = initialState, action){
    switch (action.type){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff 
            }
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };
        default:
            return state
    }
}
