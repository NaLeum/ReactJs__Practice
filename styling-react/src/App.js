  import React, { Component } from 'react';
import CSSModule from './CSSModule';
import SassComponent from './SassComponet';
import StyledComponent from './StyledComponent';

class App extends Component {
  render() {
    return (
      <>
        <SassComponent />
        <CSSModule />
        <StyledComponent />
      </>
    );
  }
}

export default App;