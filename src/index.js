import React from 'react';
import ReactDOM from 'react-dom'; 
import registerServiceWorker from './registerServiceWorker';

import { shuffle, sample } from 'lodash';
import { BrowserRouter, Route } from 'react-router-dom';

import * as Redux from 'redux';
// import * as ReactRedux from 'react-redux';
import { Provider } from 'react-redux';


import AuthorQuiz from './AuthorQuiz';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './index.css';
import AddAuthorForm from './AddAuthorForm/AddAuthorForm';
import { Object } from 'core-js';

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

const getTurnData = ( authors ) => {
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

const reducer = (state = { authors, turnData: getTurnData(authors), highlight: '' } , action) => {
  switch (action.type) {
    case 'ANSWER_SELECTED':
      // calc if is correct
      const isCorrect = state.turnData.author.books.some( book => book === action.answer );
      return Object.assign(
        {}, 
        state, 
        { highlight : isCorrect ? 'correct' : 'incorrect' }
      );
    case 'CONTINUE':
      return Object.assign(
        {},
        state,
        { highlight : '', turnData: getTurnData(authors) }
      );
    case 'ADD_AUTHOR':
      return Object.assign(
        {},
        state,
        { authors : state.authors.concat( [action.author] )}
      );
    default:
      return state;
  }
}


// let state = resetState(); // vanilla method
let store = Redux.createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <React.Fragment> {/* React.Fragment required to wrap routes */}
        <Route exact path="/" component={AuthorQuiz} />
        <Route exact path="/add" component={AddAuthorForm} />
      </React.Fragment>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
