
import React, { Component } from 'react';
import AuthorQuiz from '../AuthorQuiz';


const App = () => {

}


function onAnswerSelected( chosen ) {
  const isCorrect = state.turnData.author.books.some( book => book === chosen );
  state.highlight = isCorrect ? 'correct' : 'incorrect';
  reRender();
} 


class App extends Component {
  constructor() {
    super();

    this.onAnswerSelected = this.onAnswerSelected.bind(this);
  }

  onAnswerSelected() {

  }
  render() {
    return <AuthorQuiz {...state} onAnswerSelected={this.onAnswerSelected} />;
  }
}


export default App;