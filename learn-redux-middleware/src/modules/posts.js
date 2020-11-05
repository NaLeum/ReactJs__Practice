import { call, getContext, put, select, takeEvery } from "redux-saga/effects";
import { createPromiseSaga } from "../lib/asyncUtils";
import * as postsAPI from '../lib/posts';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POSTS';
const GET_POST_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POST_ERROR = 'GET_POSTS_ERROR';

const GO_TO_HOME = 'GO_TO_HOME';

const PRINT_STATE = 'PRINT_STATE'

export const getPosts = () => ({type: GET_POSTS});
export const getPost = (id) => ({
    type:GET_POST,
    payload: id, //saga에서 api를 호출할때 이 값을 파라미터로 사용하기 위함
    meta:id //리듀서에서 처리할때 사용하는 용도
})
export const printState= () => ({
    type: PRINT_STATE
})
//사가 함수 작성
// function* getPostsSaga() {
//     try{
//         const posts=yield call(postsAPI.getPosts);
//         yield put({
//             type:GET_POSTS_SUCCESS,
//             payload:posts
//         })
//     }catch(e){
//         yield put({
//             type:GET_POSTS_ERROR,
//             payload:e,
//             error: true
//         })
//     }
// }

// function* getPostSaga(action) {
//     const id = action.payload;
//     try{
//         const post = yield call(postsAPI.getPostById,id);
//         yield put({
//             type:GET_POST_SUCCESS,
//             payload:post,
//             meta:id
//         })
//     }catch(e){
//         yield put({
//             type:GET_POST_ERROR,
//             payload:e,
//             error: true,
//             meta:id
//         })
//     }
// }

const getPostsSaga = createPromiseSaga(GET_POSTS,postsAPI.getPosts);
const getPostSaga = createPromiseSaga(GET_POST,postsAPI.getPostById);


//액션을 모니터링 
export function* postsSaga(){
    yield takeEvery(GET_POSTS,getPostsSaga);
    yield takeEvery(GET_POST,getPostSaga);
    yield takeEvery(GO_TO_HOME,goToHomeSaga)
    yield takeEvery(PRINT_STATE,printStateSaga)
}

function* goToHomeSaga() {
    const history = yield getContext('history')
    history.push('/')
}

function* printStateSaga(){
    const state = yield select(state => state.counter)
    console.log(state)
}

// 라우터 구현 
export const goToHome = () => ({type:GO_TO_HOME})