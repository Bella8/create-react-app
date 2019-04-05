import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StarWarIndex from './star-war-index'
import CommentIndex from './comment-index'
import Header from './header'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
          <Header />
        <div style={{ display: 'flex', justifyContent: 'center', maxWidth:'500px', padding: '80px' }}>
          <Route path='/' exact component={StarWarIndex} />
          <Route path='/comment' component={CommentIndex} />
        </div>
        </BrowserRouter>
    )
  }
}

export default App
