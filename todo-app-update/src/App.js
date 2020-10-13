import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

// 렉을 경험 할 수 있도록 많은 데이터를 렌더링 해본다.
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// useReducer를 사용해도 onToggle과 onRemove가 계속 새로워지는 문제를 해결할 수 있다.
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로추가
      //{type: 'INSERT, todo: {id:1, text:'todo', checked:false}};
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      //{type: 'REMOVE',id:1};
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': // 토글
      //{type: 'REMOVE',id:1};
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}
const App = () => {
  // 원래 두번째 파라미터에는 초기상태를 넣어야한다
  // 세번쨰는 초기상태를 만들어주는 함수를 넣어준다.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // const [todos, setTodos] = useState(createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    // setTodos(todos.concat(todo));
    nextId.current += 1; //nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
