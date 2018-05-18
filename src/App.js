import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
import Main from './main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;