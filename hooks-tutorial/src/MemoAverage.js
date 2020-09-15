// useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할수있다. 
// 앞의 Average파일에서는 숫자를 등록할때 뿐만아니라 인풋내용이 수정될 떄도 우리가 만든 getAverage함수가 호출되는것을 확인할수있다.
// 인풋내용이 바뀔 때는 평균값을 다시 계산할 필요가 없는데 이렇게 렌더링할때마다 계산하는것은 낭비
// useMemo는 렌더링 과정에서 특정 값이 바뀌었을떄만 연산 실행, 원하는 값이 바뀌지 않으면 연산했던 결과를 다시 사용하는 방식

import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if(numbers.length===0) return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
};

const MemoAverage = () => {
    const [list,setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    }
    const onInsert = e => {
        const nextList = list.concat(parseInt(number))
        setList(nextList);
        setNumber('');
    }

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

export default MemoAverage;