const myLogger = store => next => action => {
    console.log(action);
    const result = next(action); // 액션을 다음 미들웨어로 넘기겠다.
    console.log('\t',store.getState())
    return result;
}

export default myLogger;