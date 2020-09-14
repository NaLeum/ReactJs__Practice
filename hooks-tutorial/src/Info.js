import React, { useState, useEffect } from 'react';
// useEffet은 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
// componentDidMount + componentDidUpdate 를 합친형태
const Info = () => {
    const [name,setName] = useState('');
    const [nickname,setNickname] = useState('');
    useEffect(()=>{
        console.log('렌더링 되었습니다');
        console.log({
            name,
            nickname
        })
    })
    
    // 마운트 될때만 실행하고 싶을때 // update x
    useEffect(()=>{
        console.log('마운트 될때만 실행')
    },[])

    // 특정갑이 업데이트 될때만 실행
    // componentDidUpdate(prevProps,prevState){
    //     if(prevProps.value !== this.props.value){
    //         doSomething();
    //     }
    // }
    // props안에 들어있는 value값이 바뀔때만 특정 작업을 실행
    // useEffect 에서는 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 밗을 넣어주면 된디아아ㅏ
    useEffect(()=>{
        console.log(name);
    },[name])


    // useEffect 는 기본적으로 렌더링되고 난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
    // 컴포넌트가 언마운트 되기 전이나 업데이트 직전에 어떤던 작업을 수행하고 싶으면,
    // useEffect에서 뒷정리 함수를 반환해주어야 한다.
    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return () =>{
            console.log('clean up');
            console.log(name);
        }
    },[])

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickname(e.target.value);
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    <b>이름 :</b> {name}
                </div>
                <div>
                    <b>닉네임 :</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;