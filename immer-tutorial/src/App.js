import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';
const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  //input 수정을 위한 함수
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      // ...form,
      // [name]: [value],
      // 첫번째는 수정하고 싶은 상태, 두번째는 상태를 어떻게 업데이트 할지
      produce((draft) => {
        draft[name] = value;
      }),
    );
  }, []);

  //form을 등록하기 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      //array에 새항목 등록
      // setData({
      //   ...data,
      //   array: data.array.concat(info),
      // });
      setData(
        produce((form, draft) => {
          draft.array.push(info);
        }),
      );

      //form초기화
      setForm({
        name: '',
        username: '',
      });
      nextId.current += 1;
    },
    [form.name, form.username],
  );
  // 항목을 삭제하는 함수
  const onRemove = useCallback((id) => {
    // setData({
    //   ...data,
    //   array: data.array.filter((info) => info.id !== id),
    // });
    setData(
      produce((form, draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1,
        );
      }),
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
