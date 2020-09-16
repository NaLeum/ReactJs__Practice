// useCallback은 useMemo와 상당히 유사한 함수이다. 
// 주로 렌더링 성능을 최적화 해야하는 상황에서 사용
// 만들어 놨던 함수를 재사용 가능
// 밑의 onChange와 onInsert는 컴포넌트가 리랜더링 될때마다 새로 만들어진 함수를 사용하게 된다. 
// 컴포넌트의 랜더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 갯수가 많아지면 이 부분을 최적화 해주는것이 좋다.

import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if(numbers.length===0) return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
};

const CallBackAverage = () => {
    const [list,setList] = useState([]);
    const [number, setNumber] = useState('');

    // useCallback의 첫 파라미터는 생성하고 싶은 함수
    // 두번째 파라미터는 배열 -> 어떤 값이 바뀌었을 때 함수를 새로 생성하는지 명시

    // 함수 내부에서 상태 값에 의존해야 할 떄느는 그 값을 반드시 두 번째 파라미터에 포함시켜주어야 한다. 
    // onChange의 경우에는 기존 값을 조회하지 않고 바로 설정만하니 상관없다. 
    // onInsert는 기존 number와 list를 조회해서 새로운 nextList를 생성하기 떄문에 number와 list를 반드시 넣어주어야한다.


    const onChange = useCallback(e=>{
        setNumber(e,target.value);
    },[]) // 컴포넌트가 처음 렌더링될 때만 함수 생성
    const onInsert = useCallback(()=>{
        const nextList = list.concat(parseInt(number))
        setList(nextList);
        setNumber('');
    },[number,list]) // number 혹은 list가 바뀌었을때만 함수 생성

    const avg = useMemo(()=>getAverage(list),[list])

    return(
        <div>
            <br/>
            <input type='number' value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))} 
                {/* map()메서드에서 {}사용할떄는 return을 사용한다. 
                    아니면 ()를 사용하여 요소를 묶어준다.  */}
            </ul>
            <div>
                <b>평균값:</b>{avg}
            </div>
        </div>
    )
}

export default CallBackAverage;