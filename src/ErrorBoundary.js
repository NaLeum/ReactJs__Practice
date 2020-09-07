import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state={
        error : false
    };

    // 컴포넌트 렌더링 도중 에러가 발생했을때 애플리케이션이 먹통되지 않고 오류 UI를 볼여줄수있게 한다. 
    componentDidCatch(error,info){
        this.setState({
            error:true
        });
        console.log({error,info});
    }
    render(){
        if(this.state.error) return <div>에러가 발생했습니다.</div>
        return this.props.children
    }
}

export default ErrorBoundary;