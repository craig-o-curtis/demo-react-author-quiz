import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './AuthorQuiz.css';

import Hero from './Hero/Hero';
import Turn from './Turn/Turn';
import Continue from './Continue/Continue';
import CommentForm from './CommentForm/CommentForm';
import Footer from './Footer/Footer';


class AuthorQuiz extends Component {
  constructor() {
    super();
    // get access to DOM node
      // then use ref in markup
    this.authorQuizNode = React.createRef();
  }

  // ** Like $postLink, called after DOM elements created
  componentDidMount() {
    this.authorQuizNode.current.innerHTML += "<br />Set on the wrapped DOM Element. <strong>Unsafe</strong> since interpreted as HTML";
  }

  render() {
    return (
      <div className="AuthorQuiz" ref={this.authorQuizNode}>
        {"Set in render <strong>safe</strong> since not interpreted as HTML"}
        <header className="AuthorQuiz-header">
          <img src={logo} className="AuthorQuiz-logo" alt="logo" />
          <h1 className="AuthorQuiz-title">Welcome to the Author Quiz</h1>
        </header>
        <div className="container-fluid">
          <Hero />
          {/* <Turn author={this.props.turnData.author} books={this.props.turnData.books} /> */}
          <Turn {...this.props.turnData} highlight={this.props.highlight} onAnswerSelected={this.props.onAnswerSelected} />
          {/* <Continue /> */}
          <Continue />
          <p>
            <Link to="/add">Add an Author</Link>
          </p>
          <CommentForm />
        </div>

        <Footer />
        
      </div>
    );
  }
}

export default AuthorQuiz;
