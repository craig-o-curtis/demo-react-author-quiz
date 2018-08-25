import React from 'react';
import ReactDOM from 'react-dom'; 
import registerServiceWorker from './registerServiceWorker';

import { shuffle, sample } from 'lodash';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';


import AuthorQuiz from './AuthorQuiz';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './index.css';
import AddAuthorForm from './AddAuthorForm/AddAuthorForm';

const authors = [
  {
    name : 'Mark Twain',
    imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/MarkTwain.LOC.jpg/210px-MarkTwain.LOC.jpg',
    imageSource : 'Wikimedia Commons',
    books : ['The Adventures of Tom Sawyer', 'Roughing It', 'The Adventures of Huckleberry Finn']
  },
  {
    name : 'Joseph Conrad',
    imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/0/07/Joseph_Conrad.PNG',
    imageSource : 'Wikimedia Commons',
    books : ['Heart of Darkness']
  },
  {
    name : 'Stephen King',
    imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg',
    imageSource : 'Wikimedia Commons',
    books : ['The Shining', 'IT']
  },
  {
    name : 'Charles Dickens',
    imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/0/02/Francis_Alexander_-_Charles_Dickens_1842.jpeg',
    imageSource : 'Wikimedia Commons',
    books : ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name : 'William Shakespeare',
    imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/800px-Shakespeare.jpg',
    imageSource : 'Wikimedia Commons',
    books : ['Hamlet', 'MacBeth', 'Romeo and Juliet']
  },
  {
    name : 'Charles Darwin',
    imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Charles_Darwin_by_Julia_Margaret_Cameron_3.jpg/800px-Charles_Darwin_by_Julia_Margaret_Cameron_3.jpg',
    imageSource : 'Wikimedia Commons',
    books : ['Origin of Species']
  },
  {
    name : 'Snorri Sturluson',
    imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Snorre_Sturluson-Christian_Krohg.jpg',
    imageSource : 'Wikimedia Commons',
    books : ['Heimskringla']
  },
];

function getTurnData( authors ) {
  const allBooks = authors.reduce( (total, next) => {
    return total.concat( next.books );
  }, []);

  const fourRandomBooks = shuffle( allBooks ).slice( 0, 4 );
  const answer = sample( fourRandomBooks );

  return {
    books : fourRandomBooks,
    author : authors.find( (author) => author.books.some( ( title ) => title === answer ) )
  }

}

const resetState = () => {
  return {
    turnData : getTurnData( authors ),
    highlight : 'none'
  }
}

let state = resetState();

// const state = {
//   //// turnData : {
//   ////   author : authors[0],
//   ////   books : authors[0].books
//   //// }
//   turnData : getTurnData( authors ),
//   highlight : 'none'
// };

function onAnswerSelected( chosen ) {
  const isCorrect = state.turnData.author.books.some( book => book === chosen );
  state.highlight = isCorrect ? 'correct' : 'incorrect';
  reRender();
} 

function onAddAuthor( newAuthor, history ) {
  authors.push( newAuthor );
  // need to redirect to main app
  history.push('/');
}

function onContinue() {
  state = resetState();
  reRender();
}

const App = () => {
  return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} onContinue={onContinue} />;
};

// convert wrapper to result of withRouter call
const AuthorWrapper = withRouter( ({ history }) => {
  console.log(history)
  return <AddAuthorForm onAddAuthor={(newAuthor) => onAddAuthor(newAuthor, history) } />;
});

function reRender() {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment> {/* React.Fragment required to wrap routes */}
        <Route exact path="/" component={App} />
        <Route exact path="/add" component={AuthorWrapper} />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById('root'));
}

reRender();

registerServiceWorker();
