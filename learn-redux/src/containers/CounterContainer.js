import React from 'react';
import Counter from '../components/Counter';
// 상태 조회
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

const CounterContainer = () => {
    
    // 상태 조회
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }));

    // 최적화 1번
    // const number = useSelector(state => state.counter.number);
    // const diff = useSelector(state => state.counter.diff);

    // 최적화 2번 (이전상태값과 비교 )
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }),
    shallowEqual
    );
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return(
        <Counter 
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer;