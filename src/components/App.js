import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import StarWarIndex from './star-war-index'
import CommentIndex from "./comment-index";
import Header from './header'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter className='App'>
          <Header className='App-header' />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Route path='/' exact component={StarWarIndex} />
          <Route path='/comment' component={CommentIndex} />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
