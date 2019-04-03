import React, { Component } from 'react'
import StarWarIndex from './star-war-index'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>Test page</header>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <StarWarIndex />
        </div>
      </div>
    );
  }
}

export default App;
