import React, { Component } from 'react';
import MyComponent from './MyComponent'
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeF from './EventPracticeF'
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render(){

  return (<>
  <MyComponent name='react' favoriteNumber={1}> 리액트 </MyComponent>
  <Counter/>
  <Say/>
  <EventPractice />
  <EventPracticeF />
  <ValidationSample />
  <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
  <button onClick={()=>this.scrollBox.scrollToBottom()}>맨밑으로</button>
  </>
  )
  }
}

export default App;
