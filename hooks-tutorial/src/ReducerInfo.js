// 기존에는 인풋이 여러개여서 useState를 여러번 사용했는데, 
//  useReducer를 사용하면 기존에 클래스형 컴포넌트에서 input태그에 name값을 할당하고 e.target.name을 참조하여 setState를 해 준 것과 유사한 방식으로 작업처리
import React, { useReducer } from 'react';

function reducer(state,action){
    return {
        ...state,
        [action.name]:action.value // 리듀서의 액션으로 넘어온 이벤트타겟의 name값과 value값을 얻오 state에 추가한다.
    };
}

const ReducerInfo = () => {
    const [state, dispatch] = useReducer(reducer,{
        name:'',
        nickname:''
    });
    const {name, nickname} = state;
    const onChange = e => {
        dispatch(e.target); //이벤트 타겟을 리듀서의 액션으로 넘겨준다
    }

    return(
        <div>
            <div>
                <input name='name' value={name} onChange={onChange} />
                <input name='nickname' value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    )
}

export default ReducerInfo;