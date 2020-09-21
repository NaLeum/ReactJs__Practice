import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import ReducerCounter from './ReducerCounter';
import ReducerInfo from './ReducerInfo';
import Average from './Average';
import MemoAverage from './MemoAverage';
import RefAverage from './RefAverage';
import InputsInfo from './InputsInfo';

const App= () => {
  const [visible,setVisible] = useState(false);
  return (
    <>
     <Counter />
     <button onClick={()=>{
       setVisible(!visible)
     }}
     >
       {visible ? '숨기기' : '보이기'}
     </button>
     <hr/>
     {visible&&<Info />}

     <ReducerCounter />
     <ReducerInfo />
     <Average />
     <MemoAverage />
     <RefAverage />
     <InputsInfo />
    </>
  );
}

export default App;
