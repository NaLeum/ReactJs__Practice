import React, { useState } from 'react';
//자바스크립트 배열 객체의 내장 함수인 map함수를 사용하여 반복되는 컴포넌트를 렌더링 할 수 있다. 
//map함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성합니다.
// arr.map(cllback,[thisArg])
// Key? 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 뱐동이 있는지 알아내려고 사용, 언제나 유일해야함
const IterationSample = () => {

    // const names = ['눈사람','얼음','눈','바람'];
    // const nameList = names.map((name,index) => <li key={index}>{name}</li>);
    // // 고유값이 별로 없을떄만 index값을 key로 사용해야한다. 배열이 변경될떄 효율적으로 리렌더링 하지 못한다. 
    
    const [names, setNames] = useState([
        {id:1 , text:'눈사람'},
        {id:2 , text:'얼음'},
        {id:3 , text:'눈'},
        {id:4 , text:'바람'}
    ])
    const [inputText,setInputText] = useState('');
    const [nextId,setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        if(!inputText) return ;
        // 배열의 내장함수 concat을 사용하여 새로운 항목을 추가한 배열을 만든다.
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        })
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = id => {
        //배열의 내장함수 filter를 통해 배열의 특정항목을 지운다. 
        // 밑에서는 지우고 싶은 아이템의 id값을 받아서 id값과 다른 배열 요소들만 리턴해주었다.
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames)
    }


    const nameList = names.map(name => <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>)
    return (
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    ) 

}

export default IterationSample;