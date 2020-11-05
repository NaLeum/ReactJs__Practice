import { call, put } from "redux-saga/effects";

export const createPromiseSaga = (type,promiseCreator) => {
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];
    return function* saga(action) {
        try{
            const result = yield call(promiseCreator, action.payload);
            yield put({
                type:SUCCESS,
                payload: result
            })
        }catch(e){
            yield put({
                type:ERROR,
                payload: e,
                error:true

            })
        }
    }
}

export const createPromiseSagaById = (type, promiseCreator) => {
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];
    return function* saga(action) {
        const id = action.meta;
        try{
            const result = yield call(promiseCreator, action.payload);
            yield put({
                type:SUCCESS,
                payload: result,
                meta: id
            })
        }catch(e){
            yield put({
                type:ERROR,
                payload: e,
                error:true,
                meta:id
            })
        }
    }
}