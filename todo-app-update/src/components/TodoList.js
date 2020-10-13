import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 갯수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 랜더링할떄 쓰는 함수
      list={todos} // 배열
      style={{
        outline: 'none',
      }} // 리스트에 기본 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);

// 리스트에 관련된 컴포넌트를 최적화 할떄는 내부에서 사용하는 컴포넌트를 최적화해야하고
// 리스트로 사용되는 컴포넌트 그 자체도 최적화 해야한다.
