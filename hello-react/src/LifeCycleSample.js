import React, { Component } from 'react'

// Dom이 생성되고 웹 브라우저상에 나타는것을 마운트
// 마운트 할때 호출되는 메서드 순  constructor->getDerivedStateFromProps->render->componentDidMount

//업데이트 
// 1.props가 바뀔 때
// 2.state가 바뀔 때
// 3. 부모 컴포넌트가 리렌더링 될 때
// 4. this.forceUpdate로 강제로 렌더링을 트리거할때
// getDerivedStateFromProps-> shouldComponentUpdate->render->getSnapshotBeforeUpdate->componentDidMount

// 언마운트
// 컴포넌트를 dom에서 제거하는 것
// componetWillUnmount

class LifeCycleSample extends Component{

    state = {
        number:0,
        color:null
    }

    myRef = null; //ref를 설정할 부분

    // constructor 컴포넌트를 새로 만들때마다 호출되는 클래스 생성자 메소드
    constructor(props){
        super(props);
        console.log('constructor');    
    }

    // getDerivedStateFromProps props에 있는 값을 state에 넣을 때 사용하는 메소드
    // 마운트, 업데이트
    static getDerivedStateFromProps(nextProps, preState){

        console.log('getDerivedStateFromProps');

        if(nextProps.color !== preState.color){

            return {color:nextProps.color}

        }
        return null;
    }
    // 컴포넌트가 웹 브라우저 상에 나타난후 호출된후 메서드
    componentDidMount(){
        console.log('componentDidMount')
    }    

    //props 또는 state가 변경했을때, 리렌더링을 시작할지 여부 지정
    // 기본값은 ture 
    // 현재 props와 state는 this.props와 this.state로 접근
    // 새로 설정될 props와 state는 nextProps와 nextState로 접근
    shouldComponentUpdate(nextProps,nextState){
        
        console.log('shouldComponentUpdate',nextProps,nextState);

        //숫자의 마지막 자리가 4면 리랜더링 하지 않습니다.
        return nextState.number % 10 !== 4;

    }

    // 컴포넌트를 dom에서 언마운트 할때 실행되는 메서드
    // componentDidMount에서 등록한 이벤트, 타이머 ,직접생성한 Dom 은 여기서 제거 작업
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    handleClick = () => {
        this.setState({
            number:this.state.number + 1
        });
    }

    // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    // componentDidUpdate에서 세 번째 파라미터인 snapshot값을 전달 받을수있음.
    // 업데이트 하기 직전값을 참고할 일 있을 때 활용(스크롤바 위치 유지)
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    // 리랜더링을 완료한후 실행. 업데이트가 끝난 직후이므로,dom에 관련 처리를 해도 무방
    // prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근가능
    //getSnapshotBeforeUpdate에서 반환한 값이 있다면 snapshot 값을 전달 받을수 있음 
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate',prevProps,prevState);
        if(snapshot){
            console.log('업데이트 직전 색상',snapshot)
        }

    }

    // 우리가 준비한 UI를 렌더링 하는 메서드
    render(){
        console.log('render')
        
        const style = {
            color:this.props.color
        }
        return(
            <div>
                {/* 일부러 에러를 발생시킴. componentDidCatch를 확인하기위해 */}
                {/* {this.props.missing.value} */}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }

}

export default LifeCycleSample;