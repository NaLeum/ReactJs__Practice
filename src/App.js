import React, { Component } from 'react';
import MyComponent from './MyComponent'
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeF from './EventPracticeF'

class App extends Component {
  render(){

  return (<>
  <MyComponent name='react' favoriteNumber={1}> 리액트 </MyComponent>
  <Counter/>
  <Say/>
  <EventPractice />
  <EventPracticeF />
  </>
  )
  }
}

export default App;
