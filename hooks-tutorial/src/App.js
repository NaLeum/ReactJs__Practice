import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Info from './Info';

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
    </>
  );
}

export default App;
