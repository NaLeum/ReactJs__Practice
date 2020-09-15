import React, { useState } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if(numbers.length===0) return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
};

const Average = () => {
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
                <b>평균값:</b>{getAverage(list)}
            </div>
        </div>
    )
}

export default Average;