import React, { Component } from 'react';
import logo from './logo.svg';
import './AuthorQuiz.css';

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="AuthorQuiz">
        <header className="AuthorQuiz-header">
          <img src={logo} className="AuthorQuiz-logo" alt="logo" />
          <h1 className="AuthorQuiz-title">Welcome to the Author Quiz</h1>
        </header>
        
      </div>
    );
  }
}

export default AuthorQuiz;
