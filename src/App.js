import React, { Component } from 'react';
import MyComponent from './MyComponent'
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeF from './EventPracticeF'
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor(){
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {
  state = {
    color:'#000000'
  }
  handleClick=()=>{
    this.setState({
      color:getRandomColor()
    })
  }
  render(){

  return (
  <>
    <MyComponent name='react' favoriteNumber={1}> 리액트 </MyComponent>
    <Counter/>
    <Say/>
    <EventPractice />
    <EventPracticeF />
    <ValidationSample />
    <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
    <button onClick={()=>this.scrollBox.scrollToBottom()}>맨밑으로</button>
    <IterationSample />

    <button onClick={this.handleClick}>랜덤색상</button>
    <ErrorBoundary>
      <LifeCycleSample color={this.state.color} />
    </ErrorBoundary>
  </>
  )
  }
}

export default App;
