  import React, { Component } from 'react';
import CSSModule from './CSSModule';
import SassComponent from './SassComponet';

class App extends Component {
  render() {
    return (
      <>
        <SassComponent />
        <CSSModule />
      </>
    );
  }
}

export default App;