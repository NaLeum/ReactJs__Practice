import React from 'react';
import './TodoTemplate.scss';

// TodoTemplate : 화면을 가운데로 정렬시켜주며, 앱 타이틀(일정 관리)을 보여 줍니다. children으로 내부 JSX를 props로 받아와 렌더링
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title"> 일정관리 </div>
      <div className="content"> {children} </div>
    </div>
  );
};

export default TodoTemplate;
